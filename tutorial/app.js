marked.setOptions({
  langPrefix: 'hljs ',
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

var Marked = React.createClass({
  getInitialState: function () {
    return {data: ''};
  },
  componentDidMount: function () {
    $.get(this.props.src, this.afterAcquire);
  },
  afterAcquire: function (data) {
    this.setState({data: data});
  },
  render: function () {
    var markup = marked(this.state.data);
    return React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: markup
      }
    });
  }
});

React.render(
  React.createElement(Marked, {
    src: 'docs/welcome.md'
  }),
  document.getElementById('content')
);
