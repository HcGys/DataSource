(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('light', {
        "color": [
            "#d87c7c",
            "#919e8b",
            "#d7ab82",
            "#6e7074",
            "#61a0a8",
            "#efa18d",
            "#787464",
            "#cc7e63",
            "#724e58",
            "#4b565b"
        ],
        "backgroundColor": "#ffffff",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#333333"
            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#cccccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#d87c7c",
                "color0": "#919e8b",
                "borderColor": "#d87c7c",
                "borderColor0": "#919e8b",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaa"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#d87c7c",
                "#919e8b",
                "#d7ab82",
                "#6e7074",
                "#61a0a8",
                "#efa18d",
                "#787464",
                "#cc7e63",
                "#724e58",
                "#4b565b"
            ],
            "label": {
                "color": "#eeeeee"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eeeeee",
                "borderColor": "#444444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eeeeee",
                "borderColor": "#444444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333333"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#efa18d",
                "width": 1
            },
            "itemStyle": {
                "color": "#efa18d",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#efa18d",
                "borderColor": "#efa18d",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#d82543",
                "borderColor": "#d82543"
            },
            "label": {
                "color": "#293c55"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#d87c7c"
                },
                "controlStyle": {
                    "color": "#efa18d",
                    "borderColor": "#efa18d",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#293c55"
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "label": {
                    "color": "#eeeeee"
                }
            }
        }
    });
}));
