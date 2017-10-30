# 本地化 Localisation

This repos hosts all the localisation (i18n) files for the site. Any suggested changes should be made as merge requests. Merged requests will become visible on-site.

This repo is pulled in its entirety to the `/locales` directory on the server.

## Directory Structure

### `languages.json`

`languages.json` contains an object for localisation for all language names which may have submitted recordings in a tree structure. The structure is not meant to be a difinitive description of language relationships. Instead, it is organised following commonly proposed relationships for the sake of being easy to navigate.

Corrections to the tree structure should not be made. If, for example, one believes that the proposed relationships in the first edition of the Language Atlas of China are wrong and those in the second edition are correct and 苏沪嘉 is not an appropriate subgrouping of Taihu Wu, we request you fight the urge to remove or change the 苏沪嘉 branch. Instead, if there is a subvariety that is not included in the tree but should be, please place it in the best fit, even if you think the genetic relationships of the language groups are not accurately reflected.

The structure of `languages.json` for a single entry is as follows:

```javascript
"sinitic":{
  "_": {
    "en":"Sinitic",
    "zh_TW":"漢語系",
    "zh_CN":"汉语系",
    "ko":"중국어파",
    "auto":"漢語系"
  },
  "yue": {
    // et cetera
  },
  "wu": {
    // et cetera
  },
}
```

Here, `sinitic` is the node, which also serves as the computer-friendly ascii slug. It contains two subgroups, `wu` (吴语) and `yue` (粤语). These are below another node, `_`, which holds the localisation information for `sinitic`. Every node has a child like `_`. This gives the names of each branch in the language of the user interface as determined by the localisation.

To add another language to the user interface, such as to make the site available in Japanese, each branch would need to have an added `"jp":"シナ語派"` line with the appropriate value.

Unlike the rest of the localisation files, the languages data is kept in one place to make it easier to add a single submission language without breaking the tree for pages that heavily depend on it. For languages which are not included in this file, such as `zh_HK`, one of the existing languages is set as a fallback. Thus if someone with Hong Kong Chinese set as the localisation comes to the site, they will see the Hong Kong localisation for everything but the list of languages, which will instead be shown based on the `zh_TW` values, since there will not be significant difference in language names as compared to other things. These fallbacks are determined at the start of the document, and others may be added as necessary:

```javascript
{
  "fallbacks": {
    "zh_HK": "zh_TW",
    "zh_SG": "zh_CN",
  },
  "languages": {
    "sinitic": {
      "_": {
        "en": "",
        "zh_TW": "",
        // et cetera
```
