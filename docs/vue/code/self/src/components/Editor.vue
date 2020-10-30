<template>
  <div :id="editorId"></div>
</template>

<script>
// 引入富文本编辑器
import wangEditor from 'wangeditor';
export default {
  props:{
    value:{
      required:true
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      editor:'',
      editorId:'',
    };
  },
  watch:{
    value(newval){
      if(this.editor){
        this.editor.txt.html(newval)
      }
    }
  },
  methods: {
    //生成一个随机不重复id,可以通过时间和随机数生成
    randomId(){
        let baseId = 'wang_editor';
        let now = Date.now();
        let num = Math.random().toFixed(2)*100;
        return `${baseId}_${now}_${num}`
    },
    //初始化编辑器
    initEditor(){
        let _this = this;
        _this.editorId = _this.randomId();//生成一个id
        this.$nextTick(()=>{
          //获取实例,wangEditor是被注册在window的
          let editor = new wangEditor('#'+_this.editorId);
          console.log(editor)
          _this.editor = editor;//将实例保存待调用其他api
          _this.setConfig();
          editor.create();//开始创建编辑器；
          _this.editor.txt.html(this.value)
          // 设置是否可编辑
          if(this.disabled!=='undefined'){
            this.editor.$textElem.attr('contenteditable',!this.disabled)
          }
        })
    },
    // 创建富文本编辑器
    setConfig(){
        var _this = this
        // 开始创建
        let setting = {
          uploadImgShowBase64:true,// 是否允许上传base64位图片
          pasteFilterStyle:true, // 是否过滤粘贴的样式
          zIndex:100,//设置层叠位置
          //菜单列表
          menus:[
              'head',  // 标题
              'bold',  // 粗体
              'fontSize',  // 字号
              'fontName',  // 字体
              'italic',  // 斜体
              'underline',  // 下划线
              'strikeThrough',  // 删除线
              'foreColor',  // 文字颜色
              'backColor',  // 背景颜色
              'link',  // 插入链接
              'list',  // 列表
              'justify',  // 对齐方式
              'quote',  // 引用
              'emoticon',  // 表情
              'image',  // 插入图片
              'table',  // 表格
              'video',  // 插入视频
              'code',  // 插入代码
              'undo',  // 撤销
              'redo'  // 恢复
          ],
          showLinkImg:false,//是否显示“网络图片”tab
          //监听用户输入后的change事件
          onchange:function(html){
            _this.$emit('input',html)
          }
        }
        //配置给编辑器
        _this.editor.customConfig = Object.assign(_this.editor.customConfig,setting)
    },
  },
  created(){
    // 创建editor实例
    this.initEditor();
  }
}

</script>
