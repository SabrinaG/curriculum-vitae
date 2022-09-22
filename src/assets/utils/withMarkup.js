/**
 * Function useful to get/find/query text when it might be split among multiple nodes
 *
 * Ex:
 * const { getByText } = render(<p>some <i>text</i></p>)
 * const getByTextWithMarkup = withMarkup(getByText)
 *
 * getByText('some text') // fails
 * getByTextWithMarkup('some text') // works
 */

// https://stackoverflow.com/a/56859650/5468952
const withMarkup = query => text => query((content, node) => {
  const hasText = domNode => domNode.textContent === text;
  const childrenDontHaveText = Array.from(node.children).every(
    child => !hasText(child),
  );
  return hasText(node) && childrenDontHaveText;
});

export default withMarkup;
