import SidebarBase from '@/components/Sidebar/Base/Base.vue';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import Settings from '@/views/Settings/Settings.vue';
import Stats from '@/views/Stats/Stats.vue';

import downloadFile from 'downloadjs';

export default {
  name: 'writr',
  components: {
    SidebarBase,
    SidebarButton,
    Settings,
    Stats,
    TextEditor,
  },
  computed: {
    appClassNames() {
      return [
        'writr',
        `writr-theme--${this.$store.getters.getValue('settings.editor.theme')}`,
      ].join(' ');
    },
  },
  methods: {
    closePanel() {
      this.openPanel = false;
    },
    downloadFile,
    sidebarButtonDownload() {
      const date = new Date();
      const filename = `writr_${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}__${date.getHours()}_${date.getMinutes()}.txt`;
      const text = document.getElementById('text-editor').innerText;
      this.downloadFile(text, filename, 'text/plain');
    },
    sidebarButtonToggle(name) {
      this.openPanel = this.openPanel === name ? false : name;
    },
  },
  watch: {
    '$store.state.settings.misc.language': {
      handler: function changeLanguage(newValue) {
        this.$i18n.locale = newValue;
      },
      immediate: true,
    },
  },
  data() {
    return {
      openPanel: false,
    };
  },
};
