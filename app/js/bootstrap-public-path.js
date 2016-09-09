// Fix for css url() resolve bug when sourceMap enabeled in css-loader
// (https://github.com/webpack/style-loader/pull/96)

__webpack_public_path__ = window.location.protocol + "//" + window.location.host + process.env.WEBPACK_PUBLIC_PATH;

