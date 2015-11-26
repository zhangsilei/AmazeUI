---
title: Amaze UI DataTables 使用演示
---

## 使用演示
---

### 基本使用

`````html
<table class="am-table am-table-striped am-table-bordered am-table-compact" id="example">
  <thead>
  <tr>
    <th>Rendering engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine version</th>
    <th>Grade</th>
  </tr>
  </thead>
  <tfoot>
  <tr>
    <th>Rendering engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine version</th>
    <th>Grade</th>
  </tr>
  </tfoot>
  <tbody>
  <tr class="odd gradeX">
    <td>Trident</td>
    <td>Internet
      Explorer 4.0</td>
    <td>Win 95+</td>
    <td class="center"> 4</td>
    <td class="center">X</td>
  </tr>
  <tr class="even gradeC">
    <td>Trident</td>
    <td>Internet
      Explorer 5.0</td>
    <td>Win 95+</td>
    <td class="center">5</td>
    <td class="center">C</td>
  </tr>
  <tr class="odd gradeA">
    <td>Trident</td>
    <td>Internet
      Explorer 5.5</td>
    <td>Win 95+</td>
    <td class="center">5.5</td>
    <td class="center">A</td>
  </tr>
  <tr class="even gradeA">
    <td>Trident</td>
    <td>Internet
      Explorer 6</td>
    <td>Win 98+</td>
    <td class="center">6</td>
    <td class="center">A</td>
  </tr>
  <tr class="odd gradeA">
    <td>Trident</td>
    <td>Internet Explorer 7</td>
    <td>Win XP SP2+</td>
    <td class="center">7</td>
    <td class="center">A</td>
  </tr>
  <tr class="even gradeA">
    <td>Trident</td>
    <td>AOL browser (AOL desktop)</td>
    <td>Win XP</td>
    <td class="center">6</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 1.0</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.7</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 1.5</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 2.0</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 3.0</td>
    <td>Win 2k+ / OSX.3+</td>
    <td class="center">1.9</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Camino 1.0</td>
    <td>OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Camino 1.5</td>
    <td>OSX.3+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Netscape 7.2</td>
    <td>Win 95+ / Mac OS 8.6-9.2</td>
    <td class="center">1.7</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Netscape Browser 8</td>
    <td>Win 98SE+</td>
    <td class="center">1.7</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Netscape Navigator 9</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.0</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.1</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1.1</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.2</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1.2</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.3</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1.3</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.4</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1.4</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.5</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1.5</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.6</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">1.6</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.7</td>
    <td>Win 98+ / OSX.1+</td>
    <td class="center">1.7</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Mozilla 1.8</td>
    <td>Win 98+ / OSX.1+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Seamonkey 1.1</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Epiphany 2.20</td>
    <td>Gnome</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>Safari 1.2</td>
    <td>OSX.3</td>
    <td class="center">125.5</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>Safari 1.3</td>
    <td>OSX.3</td>
    <td class="center">312.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>Safari 2.0</td>
    <td>OSX.4+</td>
    <td class="center">419.3</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>Safari 3.0</td>
    <td>OSX.4+</td>
    <td class="center">522.1</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>OmniWeb 5.5</td>
    <td>OSX.4+</td>
    <td class="center">420</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>iPod Touch / iPhone</td>
    <td>iPod</td>
    <td class="center">420.1</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Webkit</td>
    <td>S60</td>
    <td>S60</td>
    <td class="center">413</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 7.0</td>
    <td>Win 95+ / OSX.1+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 7.5</td>
    <td>Win 95+ / OSX.2+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 8.0</td>
    <td>Win 95+ / OSX.2+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 8.5</td>
    <td>Win 95+ / OSX.2+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 9.0</td>
    <td>Win 95+ / OSX.3+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 9.2</td>
    <td>Win 88+ / OSX.3+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera 9.5</td>
    <td>Win 88+ / OSX.3+</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Opera for Wii</td>
    <td>Wii</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Nokia N800</td>
    <td>N800</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Presto</td>
    <td>Nintendo DS browser</td>
    <td>Nintendo DS</td>
    <td class="center">8.5</td>
    <td class="center">C/A<sup>1</sup></td>
  </tr>
  <tr class="gradeC">
    <td>KHTML</td>
    <td>Konqureror 3.1</td>
    <td>KDE 3.1</td>
    <td class="center">3.1</td>
    <td class="center">C</td>
  </tr>
  <tr class="gradeA">
    <td>KHTML</td>
    <td>Konqureror 3.3</td>
    <td>KDE 3.3</td>
    <td class="center">3.3</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>KHTML</td>
    <td>Konqureror 3.5</td>
    <td>KDE 3.5</td>
    <td class="center">3.5</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeX">
    <td>Tasman</td>
    <td>Internet Explorer 4.5</td>
    <td>Mac OS 8-9</td>
    <td class="center">-</td>
    <td class="center">X</td>
  </tr>
  <tr class="gradeC">
    <td>Tasman</td>
    <td>Internet Explorer 5.1</td>
    <td>Mac OS 7.6-9</td>
    <td class="center">1</td>
    <td class="center">C</td>
  </tr>
  <tr class="gradeC">
    <td>Tasman</td>
    <td>Internet Explorer 5.2</td>
    <td>Mac OS 8-X</td>
    <td class="center">1</td>
    <td class="center">C</td>
  </tr>
  <tr class="gradeA">
    <td>Misc</td>
    <td>NetFront 3.1</td>
    <td>Embedded devices</td>
    <td class="center">-</td>
    <td class="center">C</td>
  </tr>
  <tr class="gradeA">
    <td>Misc</td>
    <td>NetFront 3.4</td>
    <td>Embedded devices</td>
    <td class="center">-</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeX">
    <td>Misc</td>
    <td>Dillo 0.8</td>
    <td>Embedded devices</td>
    <td class="center">-</td>
    <td class="center">X</td>
  </tr>
  <tr class="gradeX">
    <td>Misc</td>
    <td>Links</td>
    <td>Text only</td>
    <td class="center">-</td>
    <td class="center">X</td>
  </tr>
  <tr class="gradeX">
    <td>Misc</td>
    <td>Lynx</td>
    <td>Text only</td>
    <td class="center">-</td>
    <td class="center">X</td>
  </tr>
  <tr class="gradeC">
    <td>Misc</td>
    <td>IE Mobile</td>
    <td>Windows Mobile 6</td>
    <td class="center">-</td>
    <td class="center">C</td>
  </tr>
  <tr class="gradeC">
    <td>Misc</td>
    <td>PSP browser</td>
    <td>PSP</td>
    <td class="center">-</td>
    <td class="center">C</td>
  </tr>
  <tr class="gradeU">
    <td>Other browsers</td>
    <td>All others</td>
    <td>-</td>
    <td class="center">-</td>
    <td class="center">U</td>
  </tr>
  </tbody>
</table>
`````

```html
<table class="am-table am-table-striped am-table-bordered am-table-compact" id="example">
  <thead>
  <tr>
    <th>Rendering engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine version</th>
    <th>Grade</th>
  </tr>
  </thead>
  <tfoot>
  <tr>
    <th>Rendering engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine version</th>
    <th>Grade</th>
  </tr>
  </tfoot>
  <tbody>
  <tr class="odd gradeX">
    <td>Trident</td>
    <td>Internet
      Explorer 4.0</td>
    <td>Win 95+</td>
    <td class="center"> 4</td>
    <td class="center">X</td>
  </tr>
  <tr class="even gradeC">
    <td>Trident</td>
    <td>Internet
      Explorer 5.0</td>
    <td>Win 95+</td>
    <td class="center">5</td>
    <td class="center">C</td>
  </tr>
  <!-- more data -->
  </tbody>
</table>
```

```js
<script>
  $(function() {
    $('#example').DataTable();
  });
</script>
```

### 响应式

- 引入 `dataTables.responsive.min.js`
- 设置 table 宽度 `100%` 并添加禁止换行 class `.am-text-nowrap`
- 初始化时假如 `responsive` 参数

```html
<table
  width="100%"
  class="am-table am-table-striped am-table-bordered am-table-compact am-text-nowrap"
  id="example-r">
</table>
```

```js
$('#example-r').DataTable({
  responsive: true,
  dom: 'ti'
});
```

`````html
<table
  width="100%"
  class="am-table am-table-striped am-table-bordered am-table-compact am-text-nowrap"
  id="example-r">
  <thead>
  <tr>
    <th>Rendering engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine version</th>
    <th>Grade</th>
  </tr>
  </thead>
  <tfoot>
  <tr>
    <th>Rendering engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine version</th>
    <th>Grade</th>
  </tr>
  </tfoot>
  <tbody>
  <tr class="odd gradeX">
    <td>Trident</td>
    <td>Internet
      Explorer 4.0</td>
    <td>Win 95+</td>
    <td class="center"> 4</td>
    <td class="center">X</td>
  </tr>
  <tr class="even gradeC">
    <td>Trident</td>
    <td>Internet
      Explorer 5.0</td>
    <td>Win 95+</td>
    <td class="center">5</td>
    <td class="center">C</td>
  </tr>
  <tr class="odd gradeA">
    <td>Trident</td>
    <td>Internet
      Explorer 5.5</td>
    <td>Win 95+</td>
    <td class="center">5.5</td>
    <td class="center">A</td>
  </tr>
  <tr class="even gradeA">
    <td>Trident</td>
    <td>Internet
      Explorer 6</td>
    <td>Win 98+</td>
    <td class="center">6</td>
    <td class="center">A</td>
  </tr>
  <tr class="odd gradeA">
    <td>Trident</td>
    <td>Internet Explorer 7</td>
    <td>Win XP SP2+</td>
    <td class="center">7</td>
    <td class="center">A</td>
  </tr>
  <tr class="even gradeA">
    <td>Trident</td>
    <td>AOL browser (AOL desktop)</td>
    <td>Win XP</td>
    <td class="center">6</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 1.0</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.7</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 1.5</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 2.0</td>
    <td>Win 98+ / OSX.2+</td>
    <td class="center">1.8</td>
    <td class="center">A</td>
  </tr>
  <tr class="gradeA">
    <td>Gecko</td>
    <td>Firefox 3.0</td>
    <td>Win 2k+ / OSX.3+</td>
    <td class="center">1.9</td>
    <td class="center">A</td>
  </tr>
  </tbody>
  </table>
`````


### 中文排序

中文排序基于 [`localeCompare`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 实现，
在不同浏览器上会有差异。如果需要更一致的排序，可以通过后端输出拼音进行排序。

**实现步骤：**

1. 引入[中文排序插件](https://github.com/DataTables/Plugins/blob/master/sorting/chinese-string.js)，或者把以下代码粘贴到初始化函数之前：

  ```js
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
      "chinese-string-asc": function(s1, s2) {
        return s1.localeCompare(s2);
      },

      "chinese-string-desc": function(s1, s2) {
        return s2.localeCompare(s1);
      }
    });
  ```

2. 初始化的时候指定哪些栏目是中文字符（[`columnDefs` 文档](https://datatables.net/reference/option/columnDefs)）：

  ```js
    $('#sorting-chinese').dataTable({
      columnDefs: [
        {type: 'chinese-string', targets: '_all'}
      ]
    });
  ```

`````html
<table class="am-table am-table-bordered am-table-striped" id="sorting-chinese">
  <thead>
    <tr>
      <th>姓名</th>
      <th>公司</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>比尔盖茨</td>
      <td>微软</td>
    </tr>
    <tr>
      <td>乔布斯</td>
      <td>苹果</td>
    </tr>
    <tr>
      <td>类布斯科夫斯基</td>
      <td>出粮</td>
    </tr>
    <tr>
      <td>贝索斯</td>
      <td>亚马逊</td>
    </tr>
  </tbody>
</table>
`````

<script src="../amazeui.datatables.js"></script>
<script src="../dataTables.responsive.min.js"></script>
<script>
  jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "chinese-string-asc": function(s1, s2) {
      return s1.localeCompare(s2);
    },

    "chinese-string-desc": function(s1, s2) {
      return s2.localeCompare(s1);
    }
  });

  $(function() {
    $('#example').DataTable();
    $('#example-r').DataTable({
      responsive: true,
      dom: 'ti'
    });

    $('#sorting-chinese').dataTable({
      columnDefs: [
        {type: 'chinese-string', targets: '_all'}
      ]
    });
  });
</script>
