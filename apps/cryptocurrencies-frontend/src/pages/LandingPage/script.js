if (typeof FinisherHeader !== 'undefined') {
    // eslint-disable-next-line no-undef
    new FinisherHeader({
        "count": 9,
        "size": {
          "min": 1300,
          "max": 1500,
          "pulse": 0.2
        },
        "speed": {
          "x": {
            "min": 0.1,
            "max": 0.6
          },
          "y": {
            "min": 0.1,
            "max": 0.6
          }
        },
        "colors": {
          "background": "#9138e5",
          "particles": [
            "#ff4848",
            "#000000",
            "#2235e5",
            "#000000",
            "#ff0000"
          ]
        },
        "blending": "overlay",
        "opacity": {
          "center": 0.5,
          "edge": 0.05
        },
        "skew": -2,
        "shapes": [
          "c"
        ]
      })
}