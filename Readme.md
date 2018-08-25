
# ClickOutside

React click outside component.

## Installation

```
$ npm install tj/react-click-outside
```

## Example

The parameter `exceptionElementClass` and `exceptionElementId` are optional.

```js
<ClickOutside
    onClickOutside={::this.close}
    exceptionElementClass={['elementClassName']}
    exceptionElementId={['elementIdName']}
    >
  <p>Im a menu or something that you want to hide when clicking outside.</p>
</ClickOutside>
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [tjholowaychuk.com](http://tjholowaychuk.com) &nbsp;&middot;&nbsp;
> GitHub [@tj](https://github.com/tj) &nbsp;&middot;&nbsp;
> Twitter [@tjholowaychuk](https://twitter.com/tjholowaychuk)
