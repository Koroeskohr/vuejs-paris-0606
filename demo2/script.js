
AFRAME.registerComponent('cursor-listener', {
	schema: {
    texture: { type: "string" }
	},
  init: function () {
    var el = this.el
    var texture = this.data.texture
    this.el.addEventListener('mouseenter', function (evt) {
      this.setAttribute('material', 'src', texture);
      this.removeAttribute('material', 'color');
    });

    this.el.addEventListener('mouseleave', function(evt) {
      this.setAttribute('material', 'src', '')
    })
  }
});