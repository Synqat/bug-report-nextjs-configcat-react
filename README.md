Hi! This is my first bug report and is a problem I've been encountering on one of my projects, I hope this is okay and something in scope for this repository. If this is something I should address on my own or figure out with NextJS instead, let me know!

### Describe the bug

When trying to use the library in a NextJS environment, the Next SSR throws the following error:
```
error - unhandledRejection: ReferenceError: XMLHttpRequest is not defined
    at HttpConfigFetcher.fetchLogic (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-react\lib\cjs\ConfigFetcher.js:9:27)
    at ConfigServiceBase.fetchLogicInternal (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\ConfigServiceBase.js:153:32)
    at ConfigServiceBase.fetchLogic (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\ConfigServiceBase.js:88:14)
    at X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\ConfigServiceBase.js:54:19
    at new Promise (<anonymous>)
    at ConfigServiceBase.refreshLogicBaseAsync (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\ConfigServiceBase.js:52:16)
    at AutoPollConfigService.<anonymous> (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\AutoPollConfigService.js:113:51)
    at step (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\AutoPollConfigService.js:48:23)
    at Object.next (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\AutoPollConfigService.js:29:53)
    at fulfilled (X:\SyndiqatProjects\bug-report-nextjs-configcat-react\example-next-app\node_modules\configcat-common\lib\AutoPollConfigService.js:20:58)
```
Here's a code repository with the reproducible bug:
https://github.com/Synqat/bug-report-nextjs-configcat-react

### To reproduce

1. Run `npx create-next-app@latest`
2. Run `yarn add configcat-react` or equivalent in project directory
3. Modify `%app%/pages/_app.js` to include provider from library (with sdkKey defined)
4. Run `yarn dev` in project directory and hard refresh the web page

### Expected behavior

The app should be able to fetch when being SSRed by NextJS. Perhaps using the more universal `fetch` method would be suitable?

### Versions
- next - `12.3.1`
- react - `18.2.0`
- configcat-react - `1.0.1`