---
layout: default
title: 鄉音苑本地化
---

# 本地化

Localisation is important to us. We want to make sure that people can browse the project in their preferred language. Right now, we've got English and Mandarin (simplified and traditional characters) covered, as well as most of the interface translated into Korean. But it's not enough.

This repository is home to our localisation files. The data files stored here are where the site gets all the text — aside from things like story transcripts — that you see on-site. We're always looking to expand, as well as to improve the translations we have.

# Priorities

The following are what we'd like to get done, in order of importance:

## High priority

- Separation of Hong Kong `zh_HK` and Taiwanese Mandarin `zh_TW` in cases where they differ.
- Inclusion of Singapore Mandarin `zh_SG`
- Completion of the Korean `ko` localisation

## Medium priority

- Addition of Burmese/Myanmar `my` localisation

## Lower priority

- Tai Shan
- Assamese
- Thai
- any additional language

Any contributions toward any of these languages — or any other languages not listed — will be greatly appreciated, and any contributors will be listed here.

# How to contribute

The easiest way to contribute is through GitHub with this repository.

To add a new language, duplicate one of the existing `.json` files, renaming it to the language code of the language you are adding. Then translate each line from the original language to the new one. Once done, you can submit it back here to be added to the master branch.

To make changes or corrections to an existing localisation, simply fix what you think needs to be fixed and submit those changes.

Approved changes will be merged into the master branch.

## Note

Never change the structure of the `.json` files, and always be sure to validate before submitting. You can validate at [a site like https://jsonlint.com](https://jsonlint.com) to make sure that there are no errors in the document structure.
