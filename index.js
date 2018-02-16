import React, { Component } from 'react'
import PropTypes from 'prop-types'

const THRESHOLD = 3;

function inThreshold(pos1, pos2) {
  return (Math.abs(pos1.x - pos2.x) < THRESHOLD) &&
    (Math.abs(pos1.y - pos2.y) < THRESHOLD);
}

function setPos(pos, e) {
  let touches = e.touches ? e.touches[0] : null;
  if (!touches) {
    touches = e.changedTouches ? e.changedTouches[0] : null;
  }
  pos.x = touches ? touches.pageX : e.clientX;
  pos.y = touches ? touches.pageY : e.clientY;
  return pos;
}


export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.getContainer = this.getContainer.bind(this)
    this.isTouch = false
    this.posStart = { x: 0, y: 0 };
    this.posEnd = { x: 0, y: 0 };
  }

  getContainer(ref) {
    this.container = ref
  }

  render() {
    const { children, onClickOutside, ...props } = this.props
    return <div {...props} ref={this.getContainer}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('touchstart', this.onTouchStart, true)
    document.addEventListener('touchend', this.handle, true)
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.onTouchStart, true)
    document.removeEventListener('touchend', this.handle, true)
    document.removeEventListener('click', this.handle, true)
  }

  onTouchStart = e => {
    setPos(this.posStart, e)
  }

  handle = e => {
    const type = e.type;
    let canClick = false;

    if (type === 'touchend') {
      this.isTouch = true;
      setPos(this.posEnd, e)
      canClick = inThreshold(this.posEnd, this.posStart)
    }

    if ((type === 'click' && this.isTouch) || !canClick) return;
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) onClickOutside(e)
  }
}
