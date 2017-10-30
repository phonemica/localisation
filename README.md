# 本地化 Localisation

This repos hosts all the localisation (i18n) files for the site. Any suggested changes should be made as merge requests. Merged requests will become visible on-site.

This repo is pulled in its entirety to the `/locales` directory on the server.

## Directory Structure

### `/ui/`

This directory contains almost all localised terms and texts. Each localisation gets its own `.json` file, which should be identical in structure to every other localisations file.

The keys for each node in the JSON file reflect the structure of the site, and each is given a name meant to make clear to editors what the given text is referring to. 

The easiest way to contribute new localisations is to simply copy one of the existing files, rename it to the language code, and start translating. Using Spanish as an example, the steps are as follows:

1. Fork this repository
2. Clone the forked repo to your own system
3. Rename `/ui/en.json` to `/ui/es.json`, `es` being the language code for Spanish
4. Translate everything that needs to be translated
5. Push your changes to your forked repo
6. Make a merge request.

The only thing not included in this file would be names of languages, which have their own file, discussed below. Any additional UI languages will also need to be added to `/languages.json`, either for each individual language name, or as a redirect to an extant localisation's set of names.

### `languages.json`

`languages.json` contains an object for localisation for all language names which may have submitted recordings in a tree structure. The structure is not meant to be a difinitive description of language relationships. Instead, it is organised following commonly proposed relationships for the sake of being easy to navigate.

Corrections to the tree structure should not be made. If, for example, one believes that the proposed relationships in the first edition of the Language Atlas of China are wrong and those in the second edition are correct and 苏沪嘉 is not an appropriate subgrouping of Taihu Wu, we request you fight the urge to remove or change the 苏沪嘉 branch. Instead, if there is a subvariety that is not included in the tree but should be, please place it in the best fit, even if you think the genetic relationships of the language groups are not accurately reflected.

The structure of `languages.json` for a single major branch entry is as follows:

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

We are super-family agnostic. Thus while the Sal languages are Tibetoburman, they need not fall under a `tibetoburman` node. For langauge families which are diverse enough on their own, inclusion under another higher order classification is not necessary. Instead the grouping should reflect magnitude of diversity, salience of the language group among a wider population and therefore also popularity of a given grouping. As an example, Formosan has some extra significance to the area, and so would not need to be classified under a massive `austronesian` node. This may change down the road, but at the present time the current structure is sufficient.
