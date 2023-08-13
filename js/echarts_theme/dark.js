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
    //获取屏幕宽度并计算比例
    function fontSize(res){
        const clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = clientWidth / 1920;
        return res*fontSize > 10 ? res*fontSize : 10;
    }    
    echarts.registerTheme('dark', {
        "color": [
            "#dd6b66",
            "#759aa0",
            "#e69d87",
            "#8dc1a9",
            "#ea7e53",
            "#ebcb8b",
            "#73a373",
            "#73b9bc",
            "#7289ab",
            "#91ca8c",
            "#f49f42"
        ],
        "backgroundColor": "#1c1e21",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#cccccc",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "subtextStyle": {
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "4",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "4",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#b3b3b3"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#e43c59",
                "color0": "#91ca8c",
                "borderColor": "#e43c59",
                "borderColor0": "#91ca8c",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#b3b3b3"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaa"
            },
            "symbolSize": "4",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#dd6b66",
                "#759aa0",
                "#e69d87",
                "#8dc1a9",
                "#ea7e53",
                "#ebcb8b",
                "#73a373",
                "#73b9bc",
                "#7289ab",
                "#91ca8c",
                "#f49f42"
            ],
            "label": {
                "color": "#ffffff",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)",
                    "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)",
                    "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#4d4d4d"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#4d4d4d"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#4d4d4d"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#4d4d4d"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#4d4d4d"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
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
            },
            "feature": {
                "dataZoom": { "yAxisIndex": 'none' }, // 数据区域缩放
                "restore": { "show": true }, // 重置
                "saveAsImage": { "show": true }, // 导出图片
                "myFull": { // 全屏
                  "show": true,
                  "title": '全屏',
                  "icon": 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                  "onclick": (e) => {
                    // 全屏查看
                    if (domName.requestFullScreen) { // HTML W3C 提议
                      domName.requestFullScreen()
                    } else if (domName.msRequestFullscreen) { // IE11
                      domName.msRequestFullScreen()
                    } else if (domName.webkitRequestFullScreen) { // Webkit
                      domName.webkitRequestFullScreen()
                    } else if (domName.mozRequestFullScreen) { // Firefox
                      domName.mozRequestFullScreen()
                    }
                    // 退出全屏
                    if (domName.requestFullScreen) {
                      document.exitFullscreen()
                    } else if (domName.msRequestFullScreen) {
                      document.msExitFullscreen()
                    } else if (domName.webkitRequestFullScreen) {
                      document.webkitCancelFullScreen()
                    } else if (domName.mozRequestFullScreen) {
                      document.mozCancelFullScreen()
                    }
                  }
                }
            }
        },
        "legend": {
            "top": "8%",
            "y": "top",
            "x": "center",
            "type": "scroll",
            'width': "80%",
            "textStyle": {
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#b3b3b3",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#b3b3b3",
                    "width": "1"
                }
            },
            "backgroundColor": '#26292c',
            "borderColor": '#383d42',
            'confine': true,
            "extraCssText":'width:fit-content;height:fit-content;box-shadow: none;',
            "textStyle": {
                "color": '#b3b3b3',
                "fontSize": fontSize(14),
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#b3b3b3",
                "width": 1
            },
            "itemStyle": {
                "color": "#dd6b66",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#b3b3b3",
                "borderColor": "#b3b3b3",
                "borderWidth": "0.5"
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "#c23531"
            },
            "label": {
                "color": "#b3b3b3",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#a9334c"
                },
                "controlStyle": {
                    "color": "#b3b3b3",
                    "borderColor": "#b3b3b3",
                    "borderWidth": "0.5"
                },
                "label": {
                    "color": "#b3b3b3",
                    "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#ebcb8b"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#eeeeee",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff",
                "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff",
                    "fontFamily": 'LXGW WenKai Screen,Menlo,Monaco,Consolas,system-ui,"Courier New",monospace,sans-serif'
                }
            }
        }
    });
}));
