<template>
  <div class="page-select">
    <h1>Select 相关实例</h1>
    <p>以下例子中的<code class="sd">options</code>对应的内容统一如下：</p>
    <p>
      <pre class="hljs"><code class="javascript">const options = [
  {
    name: '北京',
    id: '00001',
    spell: 'beijing',
    simpleSpell: 'bj'
  },
  {
    name: '上海',
    id: '00002',
    spell: 'shanghai',
    simpleSpell: 'sh'
  },
  {
    name: '广东',
    id: '00003',
    spell: 'guangdong',
    simpleSpell: 'gd'
  },
  {
    name: '深圳',
    id: '00004',
    spell: 'shenzhen',
    simpleSpell: 'sz'
  },
  {
    name: '重庆',
    id: '00005',
    spell: 'chongqing',
    simpleSpell: 'cq'
  },
  {
    name: '西安',
    id: '00006',
    spell: 'xian',
    simpleSpell: 'xa'
  }
]</code></pre>
    </p>
    <a-divider />
    <h2>设置默认值</h2>
    <a-row :gutter="16">
      <a-col :span="12">
        设置默认值或者当前选中值为空字符串<code class="sd">''</code>的时候会影响<code class="sd">placeholder</code>的展示。
      </a-col>
      <a-col :span="12">
        <a-select
          :default-value="''"
          showSearch
          placeholder="请选择选项"
          style="width: 120px; margin-right: 16px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
        <a-select
          :value="''"
          showSearch
          placeholder="请选择选项"
          style="width: 120px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="12">
        设置默认值或者当前选中值为<code class="sd">null</code>的时候会影响<code class="sd">placeholder</code>的展示。
      </a-col>
      <a-col :span="12">
        <a-select
          :default-value="null"
          showSearch
          placeholder="请选择选项"
          style="width: 120px; margin-right: 16px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
        <a-select
          :value="null"
          showSearch
          placeholder="请选择选项"
          style="width: 120px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="12">
        设置默认值或者当前选中值为<code class="sd">undefined</code>的时候，<code class="sd">placeholder</code>正常展示。
      </a-col>
      <a-col :span="12">
        <a-select
          :default-value="undefined"
          showSearch
          placeholder="请选择选项"
          style="width: 120px; margin-right: 16px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
        <a-select
          :value="undefined"
          showSearch
          placeholder="请选择选项"
          style="width: 120px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-divider />
    <h2>设置筛选</h2>
    <h3>方式一：</h3>
    <a-row :gutter="16">
      <a-col :span="12">
        设置<code class="sd">optionFilterProp</code>为<code class="sd">children</code>
      </a-col>
      <a-col :span="12">
        <a-select
          showSearch
          allowClear
          optionFilterProp="children"
          placeholder="请选择选项"
          style="width: 120px; margin-right: 16px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <h3>方式二：</h3>
    <a-row :gutter="16">
      <a-col :span="12">
        将<code class="sd">optionFilterProp</code>设置为<code class="sd">label</code>和<code class="sd">a-select-option</code>的<code class="sd">:label="item.name"</code>自定义属性
      </a-col>
      <a-col :span="12">
        <a-select
          showSearch
          allowClear
          optionFilterProp="label"
          placeholder="请选择选项"
          style="width: 120px; margin-right: 16px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id" :label="item.name">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <h3>方式三：</h3>
    <a-row :gutter="16">
      <a-col :span="12">
        使用<code class="sd">filterOption</code>和<code class="sd">optionLabelProp</code>实现筛选、拼音筛选、简拼筛选
      </a-col>
      <a-col :span="12">
        <a-select
          showSearch
          allowClear
          :filterOption="filterOption"
          optionLabelProp="label"
          placeholder="请选择选项"
          style="width: 120px; margin-right: 16px">
          <a-select-option v-for="item in options" :key="item.code" :value="item.id" :label="item.name" :spell="item.spell" :simpleSpell="item.simpleSpell">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="12">
        上传的三种方式针对多选同样适用
      </a-col>
      <a-col :span="12">
        <div>
          <a-select
            mode="multiple"
            allowClear
            optionFilterProp="children"
            placeholder="请选择选项"
            style="width: 100%">
            <a-select-option v-for="item in options" :key="item.code" :value="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </div>
        <div>
          <a-select
            mode="multiple"
            allowClear
            optionFilterProp="label"
            placeholder="请选择选项"
            style="width: 100%">
            <a-select-option v-for="item in options" :key="item.code" :value="item.id" :label="item.name">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </div>
        <div>
          <a-select
            mode="multiple"
            allowClear
            :filterOption="filterOption"
            optionLabelProp="label"
            placeholder="请选择选项"
            style="width: 100%">
            <a-select-option v-for="item in options" :key="item.code" :value="item.id" :label="item.name" :spell="item.spell" :simpleSpell="item.simpleSpell">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const options = [
  {
    name: '北京',
    id: '00001',
    spell: 'beijing',
    simpleSpell: 'bj'
  },
  {
    name: '上海',
    id: '00002',
    spell: 'shanghai',
    simpleSpell: 'sh'
  },
  {
    name: '广东',
    id: '00003',
    spell: 'guangdong',
    simpleSpell: 'gd'
  },
  {
    name: '深圳',
    id: '00004',
    spell: 'shenzhen',
    simpleSpell: 'sz'
  },
  {
    name: '重庆',
    id: '00005',
    spell: 'chongqing',
    simpleSpell: 'cq'
  },
  {
    name: '西安',
    id: '00006',
    spell: 'xian',
    simpleSpell: 'xa'
  }
]

export default {
  name: 'pageSelect',
  data () {
    return {
      options
    }
  },
  mounted () {
    document.querySelectorAll('pre code').forEach((block) => {
      this.$hljs.highlightBlock(block)
    })
  },
  methods: {
    filterOption (inputValue, option) {
      console.log(inputValue, option)
      let currentOption
      for (let index = 0, len = this.options.length; index < len; index++) {
        const element = this.options[index]
        if (element.id === option.componentOptions.propsData.value) {
          currentOption = element
          break
        }
      }
      return currentOption.name.includes(inputValue) || currentOption.spell.includes(inputValue) || currentOption.simpleSpell.includes(inputValue)
    }
  }
}
</script>
