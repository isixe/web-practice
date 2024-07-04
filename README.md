# web-practice
一个用于学习前端技术的代码示例，源自个人技术博客。

## 浏览器

### 跨源方法
[document.domain + iframe](https://github.com/isixe/web-practice/tree/main/browser/document.domain)
- [不同端口跨源通信](https://github.com/isixe/web-practice/tree/main/browser/document.domain/diff_port)
- [父子域名跨源](https://github.com/isixe/web-practice/tree/main/browser/document.domain/diff_domain_sub_root)
- [子域名间的跨源](https://github.com/isixe/web-practice/tree/main/browser/document.domain/diff_domain_sub_sub)

[window.name + iframe](https://github.com/isixe/web-practice/tree/main/browser/window.name)
[location.hash + iframe](https://github.com/isixe/web-practice/tree/main/browser/location.hash)
- 向内传递
    - [src 传递](https://github.com/isixe/web-practice/tree/main/browser/location.hash/trans_inward_src)
    - [window.onhashchange 传递](https://github.com/isixe/web-practice/tree/main/browser/location.hash/trans_inward_window.onhashchange)

- 向外传递
    - [同源界面跳转](https://github.com/isixe/web-practice/tree/main/browser/location.hash/trans_outward_page_redirect)
    - [跨源 iframe 嵌套同源 iframe](https://github.com/isixe/web-practice/tree/main/browser/location.hash/trans_outward_iframe_iframe)

[window.postMessage](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage)
- 不同窗口
  - [单向通信](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage/diff_window/one-way_trans)
  - [双向通信](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage/diff_window/two-way_trans)
- 相同窗口
  - [iframe 单向通信](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage/same_window/to_iframe/one-way_trans)
  - [iframe 双向通信](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage/same_window/to_iframe/two-way_trans)
  - [iframe 与 iframe 单向通信](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage/same_window/iframe_to_iframe/one-way_trans)
  - [iframe 与 iframe 双向通信](https://github.com/isixe/web-practice/tree/main/browser/window.postMessage/same_window/iframe_to_iframe/two-way_trans)

[JSONP](https://github.com/isixe/web-practice/tree/main/browser/jsonp)
- [请求 Javascript 文件跨源](https://github.com/isixe/web-practice/tree/main/browser/jsonp/local_example)
- [请求服务器 API 跨源](https://github.com/isixe/web-practice/tree/main/browser/jsonp/api_example)

[CORS](https://github.com/isixe/web-practice/tree/main/browser/cors)
- [简单请求](https://github.com/isixe/web-practice/tree/main/browser/cors/simple_request)
- [预检请求](https://github.com/isixe/web-practice/tree/main/browser/cors/preflight_request)
  - [无CORS失败示例](https://github.com/isixe/web-practice/tree/main/browser/cors/preflight_request/failed)
  - [有CORS成功示例](https://github.com/isixe/web-practice/tree/main/browser/cors/preflight_request/success)

[Proxy Server](https://github.com/isixe/web-practice/tree/main/browser/proxy_server)
- [Webpack](https://github.com/isixe/web-practice/tree/main/browser/proxy_server/webpack)
- [Vite](https://github.com/isixe/web-practice/tree/main/browser/proxy_server/vite)
- [Node.js](https://github.com/isixe/web-practice/tree/main/browser/proxy_server/node.js)
- [Nginx](https://github.com/isixe/web-practice/tree/main/browser/proxy_server/nginx)

[Websocket]()