require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs" } });

require(["vs/editor/editor.main"], function () {
  // 创建 diff 编辑器
  const container = document.getElementById("container");
  const diffEditor = monaco.editor.createDiffEditor(container, {
    theme: "vs",
    renderSideBySide: true,
    originalEditable: true, // 关键：让左边也可编辑
    automaticLayout: true
  });

  // 初始化左右两个可输入的文本模型
  const leftModel = monaco.editor.createModel("", "plaintext");
  const rightModel = monaco.editor.createModel("", "plaintext");

  // 设置 diff 模型
  diffEditor.setModel({
    original: leftModel,
    modified: rightModel
  });
});

