// cpbBuilder.js
// 环形进度条生成插件
;
(function (global, undefined) {
    "use strict" // 使用js严格模式检查，使语法更规范
    var _global;
    // 定义一些默认参数
    // 参数优先级顺序为 canvas 元素 [data-*] 属性 > 插件实例化参数 > 插件默认参数
    var _options = {
        // true 以百分比显示 || false 以原始值显示
        showPercent: true,
        // 显示值前缀
        prefix: '',
        // 显示值后缀，如果以原始值显示可以为数字添加单位符号后缀
        suffix: '',
        // 数字格式化选项，默认保留小数点后2位
        fiexd: 2,
        // 计算百分比是的分母
        total: 100,
        // 动画选项，使用每帧增加的百分比调整动画速度，默认 2.5 即每帧增加 2.5%，设置为 0 或 false 关闭动画
        animation: 2.5,
        // 旋转，只旋转进度条，文本不旋转
        rotate: 0,
        // 反向，顺时针还是逆时针
        reverse: false,
        // 样式，不可通过 canvas 元素 [data-*] 属性设置
        style: {
            // 线宽
            circleWidth: 10,
            // 进度条颜色
            circleColor: "#10aeff",
            // 进度条背景颜色，设置为 false 时不显示
            circleBackground: '#eee',
            // 值文本颜色
            valueColor: "#777",
            // 标签文本颜色
            lableColor: "#777",
            // 字体，不能设置文字大小
            font: "'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif",
            // 进度条渐变设置，设置渐变以后会使 circleColor 选项失效
            gradient: false
        }
    }
    // api 实例
    var apiInstance;
    // 定义 api
    var _plugin_api = function (options) {
        // api 实例化，可以在 api 以外的函数中调用 api
        apiInstance = this;
        // 合并默认参数
        this.options = mergeObj(options, _options)

        // 绘制函数
        this.draw = function (canvas) {
            // 如果输入参数是字符串，则默认为 canvasID 使用 ID 选择器获取画布
            if (typeof canvas == "string") {
                // 获取画布
                canvas = document.getElementById(canvas);
            }
            // 获取 context
            var context = canvas.getContext("2d");
            let animation = getData('animation', context)
            if (!animation) {
                // 静态绘制
                drawArcBg(context); // 绘制进度条背景
                drawLabel(context); // 绘制标签
                drawArc(context); // 绘制进度条
                drawText(context);
            } else {
                // 使用动画绘制
                // 设置自增变量，百分比
                var increment = 0;
                (function drawAnimation() {
                    window.requestAnimationFrame(drawAnimation, canvas);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    drawArcBg(context); // 绘制进度条背景
                    drawLabel(context); // 绘制标签
                    drawArc(context, increment);
                    // 绘制值文本时需要将自增变量百分比逆向转换为绝对值
                    drawText(context, getAbsolute(increment, context));
                    if (increment < getPercent(canvas.dataset.value, context)) {
                        increment += getData('animation', context);
                    } else {
                        increment = getPercent(canvas.dataset.value, context);
                    }
                })();
            }
            return this; //返回当前方法
        }
    }
    // 绘制环行条
    function drawArc(context, value = undefined) {
        // 设置图形中心
        var center = getCenter(context);
        // 设置环形半径 
        var radius = getRadius(context);
        // 设置开始角度
        var startAngle = (-0.5 + getData('rotate', context) / 180) * Math.PI;
        if (value === undefined) {
            value = getData('value', context)
        }
        // 设置结束角度
        var endAngle = (getPercent(value, context) / 50 - 0.5 + getData('rotate', context) / 180) * Math.PI;
        context.save();
        context.beginPath();
        // 创建圆
        context.arc(center, center, radius, startAngle, endAngle, getData('reverse', context));
        // 设置线宽
        context.lineWidth = apiInstance.options.style.circleWidth;
        // 使用渐变
        if (!apiInstance.options.style.gradient) {
            context.strokeStyle = apiInstance.options.style.circleColor;
        } else {
            var gradientDirection = {
                x1: 0,
                y1: 0,
                x2: radius * 2,
                y2: 0
            }
            switch (apiInstance.options.style.gradient.direction) {
                case 1:
                    gradientDirection.x2 = 0;
                    gradientDirection.y2 = radius * 2;
                    break;
                case 2:
                    gradientDirection.y2 = radius * 2;
                    break;
                case 3:
                    gradientDirection.y1 = radius * 2;
                    break;
            }
            var gradient = context.createLinearGradient(gradientDirection.x1, gradientDirection.y1, gradientDirection.x2, gradientDirection.y2);
            var clolor = apiInstance.options.style.gradient.color;
            for (var index in clolor) {
                gradient.addColorStop(index, clolor[index]);
            }
            context.strokeStyle = gradient;
        }
        context.stroke();
        context.restore();
        return apiInstance
    }
    // 绘制环形背景
    function drawArcBg(context) {
        if (apiInstance.options.style.circleBackground) {
            // 设置图形中心
            var center = getCenter(context);
            // 设置环形半径 
            var radius = getRadius(context);
            context.beginPath();
            // 创建圆
            context.arc(center, center, radius, 0, 2 * Math.PI);
            // 设置线宽
            context.lineWidth = apiInstance.options.style.circleWidth;
            context.strokeStyle = apiInstance.options.style.circleBackground;
            context.stroke();
        }
        return apiInstance
    }
    // 绘制值文本
    function drawText(context, value = undefined) {
        // 设置图形中心
        var center = getCenter(context);
        // 设置环形半径 
        var radius = getRadius(context);
        if (value === undefined) {
            value = getData('value', context)
        }
        // 设置值显示文本
        var valStr;
        let showPercent = getData('showPercent', context)
        if (showPercent) {
            valStr = getData('prefix', context) + value + '%'
        } else {
            valStr = getData('prefix', context) + value + getData('suffix', context);
        }
        context.save();
        context.font = radius / 2.25 + "px " + apiInstance.options.style.font;
        context.textAlign = "center"; li.active a
        context.textBaseline = "middle";
        context.fillStyle = apiInstance.options.style.valueColor;
        context.fillText(valStr, center, center, radius * 1.75);
        context.restore();
        return apiInstance
    }
    // 绘制标签
    function drawLabel(context) {
        // 设置图形中心
        let center = getCenter(context)
        // 设置环形半径 
        let radius = getRadius(context)
        let label = context.canvas.dataset.label
        // 显示标签文本
        if (label) {
            context.font = radius / 3.5 + "px " + apiInstance.options.style.font;
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillStyle = apiInstance.options.style.lableColor;
            context.fillText(label, center, center + radius / 2.5, radius);
        }
        return apiInstance
    }
    // 获取 canvas 半径
    function getRadius(context) {
        return (context.canvas.width - apiInstance.options.style.circleWidth) / 2;
    }
    // 获取 canvas 中心坐标
    function getCenter(context) {
        return context.canvas.width / 2;
    }
    // 获取百分比值
    function getPercent(value, context) {
        let total = getData('total', context)
        return value / total * 100;
    }
    // 获取绝对值
    function getAbsolute(percent, context) {
        let total = getData('total', context)
        return percent * total / 100;
    }
    // 
    function getData(dataName, context) {
        let data = context.canvas.dataset[dataName]
        if (typeof data === "undefined") {
            data = apiInstance.options[dataName]
        }
        return data
    }
    // 合并对象，支持无限深度，用来合并 options
    function mergeObj(obj, original) {
        for (var item in obj) {
            // 如果新的值和原始值类型都是 object，则使用 mergeObj 进行合并
            if (typeof obj[item] === 'object' && typeof original[item] === 'object') {
                mergeObj(obj[item], original[item])
            } else {
                original[item] = obj[item]
            }
        }
        return original
    }

    // 将插件对象暴露给全局对象
    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = _plugin_api;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return _plugin_api;
        });
    } else {
        // 最后的插件名称在这里定义
        var _plugin_name = 'cpbBuilder';
        !(_plugin_name in _global) && (_global[_plugin_name] = _plugin_api);
    }
}());// cpbBuilder.js