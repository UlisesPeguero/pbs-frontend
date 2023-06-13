export default function mainPathFromLocation() {
  const [currentPath = ''] = window.location.pathname.match(/^([/]\w*)/gi);
  return currentPath;
}
