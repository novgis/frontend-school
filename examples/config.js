/**
 * ExamplesforCesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
  name: "Gallery"
};

var exampleConfig = {
  WebGL: {
    name: "WebGL",
    content: {
      Hello: {
        name: "Hello Series",
        content: [
          {
            name: "Hello Cesium",
            thumbnail: "00_hello.jpg",
            fileName: "00_hello"
          }
        ]
      }
    }
  }
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
  WebGL: "fa-globe"
  //   Widgets: "fa-desktop",
  //   Visualization: "fa-pie-chart"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
  WebGL: "fa-globe"
  //   Widgets: "fa-desktop",
  //   Visualization: "fa-pie-chart"
};
