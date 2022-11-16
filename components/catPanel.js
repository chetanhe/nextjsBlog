import { QuickLinkMob } from './menu';

export default function CatPanel({
  menuPanelStyle,
  onClick,
  initData,
  catTypeId,
}) {
  const foundCategory = initData.NAV_MENU.menu.find(function (item) {
    if (item.category_type_id === catTypeId) {
      return true;
    }
  });
  if (!foundCategory) {
    return null;
  }
  return (
    <div className="MenuPanel">
      <div className="Menu__panel" style={menuPanelStyle}>
        <div className="Menu__header">
          <span className="arrow"></span>
          <span className="list-title">{foundCategory.name}</span>
          <span className="icon icon-corner-cros closeMobileMenu"></span>
        </div>
        <div className="Menu__list__wrap">
          <ul className="Menu__list">
            {foundCategory.columns.map((item) => (
              <li
                className="Menu__item"
                onClick={() => onClick()}
                key={item.data[0].category_id}
              >
                <div className="text">{item.data[0].name}</div>
                <span className="arrow"></span>
              </li>
            ))}
          </ul>
          <QuickLinkMob initData={initData} />
        </div>
      </div>
    </div>
  );
}
