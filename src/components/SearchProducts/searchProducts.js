require('./searchBox.js');

module.exports = 'It works from searchProducts.js. It works';



// class SearchProducts extend BaseComponent {
//
//   const baseConfig = {
//     herp: 'derp'
//   }
//   let element = null;
//
//   constructor = (config, data) => {
//
//     //combine baseConfig with config.
//     Util.deepMerge(baseConfig, config);
//
//     if(data) {
//       template = createTemplate(data);
//     }
//
//     if(config.id && window.document) {
//       element = window.document.selectElementById(config.id);
//       attachEventHandlers(element);
//     }
//
//     return template;
//   }
//
//   createTemplate = (data) => {
//     //create the template
//   }
//
//
//   searchClick = (evt) => {
//       config.searchCallback(event.target.value);
//   }
// }
