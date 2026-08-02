## Contributing 贡献

First, thanks for your interest in contributing to this project, even it's **PERSONAL**!
首先, 感谢你对这个项目\(即使作为一个**个人**项目\)的兴趣和贡献！

There are some guidelines to help you contribute to this project:
下面是一些指导方针来贡献这个项目：

1. If you want your branch to be merged, please make sure you passed test\(s\).
   I/We will test again before merging.
   If you have any questions, feel free to open an issue or contact me/us directly.

   如果你想让你的分支被合并，请确保通过了你的测试。
   我\(们\)会在合并之前再次测试。
   如果你有任何问题，欢迎打开一个 issue 或直接联系我\(们\)。

2. Make sure your code has passed the `pnpm run lint`

   确保你的代码使用了`pnpm run lint`

3. **DO NOT** move the version number.

   **不要**乱动版本号。

4. Unless you wrote the styles of template for your pages \(Usually you needn't do it\)
   If you want to register your pages, in `createBrowserRouter`, `main.tsx`,
   fill `<Template element={...} />` in the `element` attr.

   除非你为你的页面专门写了模板样式\(通常不用\) 其他情况下
   若想注册你的页面, 在`main.tsx`中的`createBrowserRouter`, `element`字段请使用`<Template element={...} />`

5. Please try your best to mark type annotation for every defined variables, arguments of functions
   , etc. It will help you realize your code better.

   请尽力去给每个定义的变量, 函数参数等做类型标注. 这会帮你更好的理解你的代码.
