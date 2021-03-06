
function OSSVideoClient(options) {
    options = options || {
        osspath: "LexusReport/Appeal/"
    };
    let _id = options["uploadId"] ? options["uploadId"] : "";
    if (!options.complete) {
        options.complete  = function () {
            $("#postfiles" + _id).attr("disabled", false);
            $("#selectfiles" + _id).attr("disabled", false);
            $("#ossfile" + _id).empty();
        }
    }
    var uploader = init_uploader({
        uploadId: _id,
        fileAddCheck: options.fileAddCheck,
        fileAddCheckMsg: options.fileAddCheckMsg,
        filepath: options.osspath,
        uploaded: function (args) {
            if (options.uploaded) options.uploaded(args);
        },
        complete: function () {
            $("#postfiles" + _id).attr("disabled", false);
            $("#selectfiles" + _id).attr("disabled", false);
            $("#ossfile" + _id).empty();
        }
    });
    $("#postfiles" + _id).click(function () {
        uploader.start();
        $(this).attr("disabled", true);
        $("#selectfiles" + _id).attr("disabled", true);
    });
}
function init_uploader(options) {
    let _id = options["uploadId"];
    var policyText = {
        "expiration": "2023-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
        "conditions": [
        ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
        ]
    };

    accessid = 'LTAI4G9Fv88mome6z2jXo1KU';
    accesskey = 'pTHcBSjBrH99zFNFepriwbReJaFZPT';
    osshost = 'http://yrsurvey.oss-cn-beijing.aliyuncs.com';

    var policyBase64 = Base64.encode(JSON.stringify(policyText))
    message = policyBase64
    var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true });
    var signature = Crypto.util.bytesToBase64(bytes);
    var time1 = new Date().Format("yyyyMMddhhmmssS");
    var filename = time1 + '_' + '${filename}';
    var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'selectfiles' + _id,
        //runtimes : 'flash',
        container: document.getElementById("upload-container" + _id),
        flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
        silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',

        url: osshost,

        multipart_params: {
            'Filename': filename,
            'key': options.filepath + filename,
            'policy': policyBase64,
            'OSSAccessKeyId': accessid,
            'success_action_status': '200', //让服务端返回200,不然，默认会返回204
            'signature': signature,
        },

        init: {
            PostInit: function () {
                document.getElementById('ossfile'+_id).innerHTML = '';
            },

            FilesAdded: function (up, files) {
                if (options.fileAddCheck) {
                    if (!options.fileAddCheck()) {
                        alert(options.fileAddCheckMsg);
                        return;
                    }
                }
                let _imgList = $("#imgListDiv" + _id).find(".ossImage");
                let _imgSize = files.length;
                for (let i = 0; i < _imgList.length; i++) {
                    if ($(_imgList[i]).attr("data-flag") == 2) {
                        _imgSize++;
                    }
                }
                if (_imgSize > 2) {
                    alert("最多只能上传两个视频!");
                    return;
                }
                uploader.start();
            },

            UploadProgress: function (up, file) {                
               
            },

            FileUploaded: function (up, file, info) {
                var osspath = up.settings.multipart_params.key.replace("${filename}", file.name);
                var fileName = '';
                if (osspath.lastIndexOf("/") >= 0) {
                    fileName = osspath.substr(osspath.lastIndexOf("_") + 1);
                }
                if (info.status == 200) {
                    //保存文件信息
                    var args = {};
                    args.osspath = osspath;
                    args.fileName = fileName;
                    if (options.uploaded) {
                        options.uploaded(args);
                    }                    
                }
                else {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }                
            },
            UploadComplete: function () {
                if (options.complete) {
                    options.complete();
                }
            },
            Error: function (up, err) {
                document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                if (options.complete) {
                    options.complete();
                }
            }
        }
    });

    uploader.init();

    return uploader;
}
