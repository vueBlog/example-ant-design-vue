<template>
  <div id="app">
    <a-layout id="layout-top-side">
      <a-layout-header class="header">
        <router-link class="logo" :to="blog.title.link">{{ blog.title.name }}</router-link>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            :selectedKeys="menuKey"
            @click="menuClick"
            mode="inline"
            style="height: calc(100vh - 64px); overflow-x: hidden; overflow-y: auto;"
          >
            <template v-for="item in routes">
              <template v-if="item.children && item.children.length">
                <a-sub-menu :key="item.path">
                  <a-menu-item v-for="itemMenu in item.children" :key="itemMenu.path">
                    {{ itemMenu.meta.title }}
                  </a-menu-item>
                </a-sub-menu>
              </template>
              <template v-else>
                <a-menu-item :key="item.path">
                  {{ item.meta.title }}
                </a-menu-item>
              </template>
            </template>
          </a-menu>
        </a-layout-sider>
        <a-layout class="page-content-box">
          <a-layout-content class="page-content">
            <router-view/>
          </a-layout-content>
          <a-layout-footer class="footer">
            <div class="friends">
              <span>友情链接：</span>
              <a
                class="friends-link"
                v-for="item in blog.friends"
                :key="item.name"
                :href="item.href"
                target="_blank"
              >{{ item.name }}</a>
            </div>
            <div>Powered by <a href="https://github.com/fxss5201" target="_blank">fxss5201</a> © 2019-2020 <a :href="blog.author.href" target="_blank">{{ blog.author.name }}</a> <a :href="blog.record.href" target="_blank">{{ blog.record.name }}</a></div>
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import blog from './config/blog'
import { routes } from './router/index'

export default {
  data () {
    return {
      blog,
      routes
    }
  },
  computed: {
    menuKey () {
      return [this.$route.path]
    }
  },
  metaInfo () {
    return {
      title: this.$route.meta.title,
      meta: [
        { keywords: 'keywords', content: this.$route.meta.keywords },
        { keywords: 'description', content: this.$route.meta.description }
      ]
    }
  },
  methods: {
    menuClick ({ item, key, keyPath }) {
      this.$router.push(key)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#layout-top-side {
  .logo {
    float: left;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }
  .page-content-box {
    box-sizing: border-box;
    height: calc(100vh - 64px);
    overflow: auto;
    background-color: #fff;
  }
  .page-content {
    padding: 24px;
    overflow: auto;
  }
  .footer {
    text-align: center;
    background: #fff;
    border-top: 1px solid #e8e8e8;
  }
  .friends {
    margin-bottom: 10px;
    .friends-link {
      margin-left: 15px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 16px;
  }
  h6 {
    font-size: 14px;
  }
}
</style>
