webpackJsonp([6],{48:function(e,a,t){var l=React.createClass({displayName:"Example",getInitialState:function(){return{data:[{key:"查看",value:"1"}]}},onClickHandler:function(e){this.setState({data:[{key:"查看1",value:"1"},{key:"查看2",value:"2"},{key:"查看3",value:"3"},{key:"查看4",value:"3"},{key:"查看5",value:"3"},{key:"查看6",value:"3"}]})},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"下拉选框",React.createElement("span",null,"Select")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"默认"),React.createElement("div",null,React.createElement(RUI.Select,{data:[{key:"查看",value:"1"},{key:"编辑",value:"2"},{key:"删除",value:"3"}],value:{key:"查看",value:"1"},stuff:!0,event:"click",className:"rui-theme-1"})),React.createElement("h4",{className:"final-title"},"另外一种样式"),React.createElement("div",null,React.createElement(RUI.Select,{ref:"selectBody",data:[{key:"查看",value:"1"},{key:"你好",value:"2"}],value:{key:"查看",value:"1"},className:"rui-theme-3",stuff:!0,callback:this.selectCallback})),React.createElement("h4",{className:"final-title"},"带搜索框"),React.createElement("div",null,React.createElement(RUI.Select,{data:[{key:"查看",value:"1"},{key:"a",value:"1"},{key:"aa",value:"1"},{key:"b",value:"1"},{key:"bba",value:"1"}],value:{key:"查看",value:"1"},filter:!0,className:"rui-theme-3",stuff:!0,filterCallback:this.filterHandle})),React.createElement("h4",{className:"final-title"},"选项只有一个"),React.createElement("div",null,React.createElement(RUI.Select,{data:this.state.data,value:{key:"查看",value:"1"},stuff:!0,event:"mouseenter",offset:"0",callback:this.selectCallback,className:"rui-theme-2 short"}),"  ",React.createElement(RUI.Button,{onClick:this.onClickHandler},"点击"))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(98)})))}});e.exports=l},98:function(e,a){e.exports="var Example = React.createClass({\r\n    getInitialState: function () {\r\n        return {\r\n            data: [{key:'查看',value:'1'}]\r\n        };\r\n    },\r\n    onClickHandler:function(e) {\r\n        this.setState({\r\n            data : [\r\n                {key:'查看1',value:'1'},\r\n                {key:'查看2',value:'2'},\r\n                {key:'查看3',value:'3'},\r\n                {key:'查看4',value:'3'},\r\n                {key:'查看5',value:'3'},\r\n                {key:'查看6',value:'3'}\r\n            ]\r\n        });\r\n    },\r\n    render:function() {\r\n        return <div className=\"example-input\">\r\n            <h2 className=\"title\">下拉选框<span>Select</span></h2>\r\n            <h3 className=\"sub-title\">演示</h3>\r\n            <div className=\"example\">\r\n                <h4 className=\"final-title\">默认</h4>\r\n                <div>\r\n                    <RUI.Select\r\n                        data={[{key:'查看',value:'1'}, {key:'编辑',value:'2'}, {key:'删除',value:'3'}]}\r\n                        value={{key:'查看',value:'1'}}\r\n                        stuff={true}\r\n                        event={'click'}\r\n                        className=\"rui-theme-1\">\r\n                    </RUI.Select>\r\n                </div>\r\n                <h4 className=\"final-title\">另外一种样式</h4>\r\n                <div>\r\n                    <RUI.Select\r\n                        ref=\"selectBody\"\r\n                        data={[{key:'查看',value:'1'},{key:'你好',value:'2'}]}\r\n                        value={{key:'查看',value:'1'}}\r\n                        className=\"rui-theme-3\"\r\n                        stuff={true}\r\n                        callback={this.selectCallback}>\r\n                    </RUI.Select>\r\n                </div>\r\n                <h4 className=\"final-title\">带搜索框</h4>\r\n                <div>\r\n                    <RUI.Select\r\n                        data={[{key:'查看',value:'1'}, {key:'a',value:'1'}, {key:'aa',value:'1'}, {key:'b',value:'1'}, {key:'bba',value:'1'}]}\r\n                        value={{key:'查看',value:'1'}}\r\n                        filter={true}\r\n                        className=\"rui-theme-3\"\r\n                        stuff={true}\r\n                        filterCallback={this.filterHandle}>\r\n                    </RUI.Select>\r\n                </div>\r\n\r\n                <h4 className=\"final-title\">选项只有一个</h4>\r\n                <div>\r\n                    <RUI.Select\r\n                        data={this.state.data}\r\n                        value={{key:'查看',value:'1'}}\r\n                        stuff={true}\r\n                        event={'mouseenter'}\r\n                        offset={'0'}\r\n                        callback={this.selectCallback}\r\n                        className=\"rui-theme-2 short\">\r\n                    </RUI.Select>\r\n                    &nbsp;&nbsp;\r\n                    <RUI.Button onClick={this.onClickHandler}>点击</RUI.Button>\r\n                </div>\r\n            </div>\r\n            <h3 className=\"sub-title\">源码</h3>\r\n            <div className=\"source\">\r\n                <textarea defaultValue={require('raw!./select.js')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;"}});