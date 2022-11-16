import { QuickLinkMob } from './menu';

export default function CtypePanel({ menuPanelStyle, onClick, initData }) {
  return (
    <div className="MenuPanel">
      <div className="Menu__panel" style={menuPanelStyle}>
        <div className="Menu__header">
          <span className="arrow" style={{ display: 'none' }}></span>
          <span className="list-title"></span>
          <span className="icon icon-corner-cros closeMobileMenu"></span>
        </div>
        <div className="Menu__list__wrap">
          <ul className="Menu__list">
            {initData.NAV_MENU.menu.map((item) => (
              <li
                className="Menu__item"
                onClick={() => onClick(item.category_type_id)}
                key={item.category_type_id}
              >
                <div className="text">{item.name}</div>
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
