var tracks = []; // 媒体数据
var options = {
    mimeType: "video/webm; codecs = vp8"
};
var mediaRecorder;
// 初始化请求用户授权监控
navigator.mediaDevices.getDisplayMedia(constraints).then(function (stream) {
    // 对音视流进行操作
    startFunc(stream);
});
// 开始录制方法
function startFunc(stream) {
    // 创建 MediaRecorder 的实例对象，对指定的媒体流进行录制
    mediaRecorder = new MediaRecorder(stream, options);
    // 当生成媒体流数据时触发该事件，回调传参 event 指本次生成处理的媒体数据
    mediaRecorder.ondataavailable = function (event) {
        var _a;
        if (((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a.size) > 0) {
            tracks.push(event.data); // 存储媒体数据
        }
    };
    mediaRecorder.start();
    console.log("************开始录制************");
}
;
// 结束录制方法
function stop() {
    mediaRecorder.stop();
    console.log("************录制结束************");
}
