# liaoxyucm.top reacted

This program uses pnpm.

本项目使用pnpm

```sh
git clone https://github.com/LiaoxyuCM/lcmtop_reacted.git
cd lcmtop_reacted
pnpm install
pnpm run dev # Preview 预览: http://localhost:5173
pnpm run build # Build 构建 (Will output to dist/ 将输出到 dist/)
```

## Preview Results 预览结果

### Online (Recommended) 在线 (推荐)

View the preview at `https://llcm.top`

在 `https://llcm.top` 查看预览

### Offline (For Developers) 离线 (开发者)

After running `pnpm run build`, you can find the output in the `dist/` folder.

在你运行 `pnpm run build` 后，你可以在 `dist/` 文件夹中找到输出。

You need to start a server to listen `dist/`, set the entry file to `index.html`

你需要开一个服务器来监听 `dist/` ，并将入口点设置为 `index.html`

```sh
npm install -g live-server # if you don't have one 如果你还没有live-server
npx live-server dist/ --entry-file=index.html
```

Sometimes, I also post a compiled `dist/` in some release, you can directly download and use it.

有时候，我也会在release里发布已经编译好的`dist/`，你可以直接下载取用

## Report an issue (for who doesn't have a GitHub account) 报告一个反馈 (对于没有 GitHub 账号的人)

Send an email to `bug@llcm.top`, I/we will reply to you as soon as possible.

发送邮件到 `bug@llcm.top`, 我\(们\)会尽快回复你。

Note: **DO NOT TRUST ANY OTHER EMAILS (ADS etc.) FROM \*@llcm.top** That maybe scam emails from others.

注意: **不要相信来自 \*@llcm.top 的任何其他邮件（广告等）** 那些可能是其他人发的诈骗邮件。
