<template>
    <syleditor
        :getAdapter="getAdapter"
        :config="config"
        placeholder="请输入内容"
    />
</template>

<script lang="javascript">
import { EventChannel } from '@syl-editor/core-utilities'
import {
  HrPlugin,
  CodeBlockPlugin,
  ItalicPlugin,
  OrderedListPlugin,
  ListItemPlugin,
  StrikePlugin,
  UnderlinePlugin,
  ToolbarLoader,
  Header1Plugin,
  Header2Plugin,
  Header3Plugin,
  FormatClearPlugin,
  BlockQuotePlugin,
  BoldPlugin,
  BulletListPlugin,
  FontFamilyPlugin,
  FontSizePlugin,
  SubPlugin,
  SupPlugin,
  AlignLeftUtil,
  AlignCenterUtil,
  AlignRightUtil
} from "@syl-editor/lib";
import {
  SylEditor,
  Toolbar,
  EmojiUtil,
  ImagePlugin,
  LinkPlugin,
  BackgroundPlugin,
  ColorPlugin,
  VideoPlugin
} from "@syl-editor/vue-syl-editor-v2";

const config = {
  Plugins: [
    ImagePlugin,
    CodeBlockPlugin,
    VideoPlugin,
    BackgroundPlugin,
    ColorPlugin,
    BlockQuotePlugin,
    BoldPlugin,
    BulletListPlugin,
    FontFamilyPlugin,
    FontSizePlugin,
    FormatClearPlugin,
    Header1Plugin,
    Header2Plugin,
    Header3Plugin,
    HrPlugin,
    ItalicPlugin,
    OrderedListPlugin,
    ListItemPlugin,
    StrikePlugin,
    UnderlinePlugin,
    LinkPlugin
  ],
  Modules: {
    toolbar: {
      Ctor: ToolbarLoader,
      option: {
        Component: Toolbar,
        tools: [
          "header",
          "block_quote",
          "bullet_list",
          "ordered_list",
          "code_block",
          "image",
          "link",
          "video",
          "hr",
          "|",
          "bold",
          "italic",
          "underline",
          "strike",
          "sub",
          "sup",
          "paragraph",
          "format_clear",
          "|",
          "font_size",
          "|",
          "background",
          "color",
          "|",
          "redo",
          "undo",
          "|",
          "emoji",
          "align_left",
          "align_center",
          "align_right",
        ],
        utils: {
          emoji: EmojiUtil,
          align_left: AlignLeftUtil,
          align_right: AlignRightUtil,
          align_center: AlignCenterUtil
        }
      }
    }
  }
};

export default {
  data() {
    return {
      config: config,
      adapter: null
    };
  },
  components: {
    syleditor: SylEditor
  },
  methods: {
    traceContentChange: function(adapter) {
      adapter.on(EventChannel.LocalEvent.TEXT_CHANGED, () => {
        console.log('内容发生变化，可通过调用adapter.getHTML()获取内容');
      });
    },
    getAdapter: function(adapter) {
      this.adapter = adapter;
      this.traceContentChange(this.adapter)
    }
  }
};
</script>