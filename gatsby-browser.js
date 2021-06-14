const React = require("react")
const MainLayout = require("./src/layout/mainlayout").default

exports.wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>
}