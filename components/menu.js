import dynamic from 'next/dynamic';
import Link from 'next/link';
import { startTransition, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setmobileMenuClose } from 'slices/mainSlice';
import mobileMenuStyles from './css/MobileMenu.module.css';

function MegaMenuItemLinks({ columns }) {
  return (
    <ul style={{ width: '1000px' }}>
      {columns.map((column) => {
        return (
          <li key={column.column_id}>
            <ul>
              {column.data.map((data) => {
                return (
                  <li key={data.category_id}>
                    <Link href={data.url}>{data.name}</Link>
                    <ul>
                      {data.products.map((product) => {
                        return (
                          <li key={product.product_id}>
                            <Link href={product.url}>{product.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function MegaMenuItem({ item, index, isOPen, hanleISOPen }) {
  const spanClasses = [];
  const liClasses = [
    item.name.toLowerCase().replace(/\'/gi, '').replace(' ', '-'),
  ];

  function handleClickOfType(e) {
    e.preventDefault();
    document
      .getElementById('panel-menu')
      .querySelectorAll('.open')
      .forEach((box) => {
        box.classList.remove('open');
      });
    e.target.closest('li').classList.add('open');
  }

  if (isOPen == index) {
    liClasses.push('open');
  }

  if (index == 0) {
    spanClasses.push('firstMenu');
  }

  if (item.name.toLowerCase().includes('men')) {
    spanClasses.push('male-top-menu');
  }

  return (
    <li className={liClasses.join(' ')} onClick={(e) => hanleISOPen(e, index)}>
      <span className={spanClasses.join(' ')}>{item.name}</span>
      <MegaMenuItemLinks columns={item.columns} />
    </li>
  );
}

function MegaMenuItems({ initData }) {
  const [isOPen, setIsOPen] = useState(0);

  function hanleISOPen(e, index) {
    e.preventDefault();
    setIsOPen(index);
  }

  return (
    <ul>
      {initData.NAV_MENU.menu.map((item, index) => {
        return (
          <MegaMenuItem
            key={index}
            item={item}
            index={index}
            isOPen={isOPen}
            hanleISOPen={hanleISOPen}
          />
        );
      })}
    </ul>
  );
}

export function QuickLinkMob({ initData }) {
  return (
    <div className="quick-link-mob">
      <ul
        className="ls-none"
        dangerouslySetInnerHTML={{ __html: initData.TXT_MOBILE_MENU_LINKS }}
      ></ul>
      <ul className="contact-group">
        <li>
          <a href="#" className="icon icon-livechat"></a>
        </li>
        <li>
          <a aria-label="phone" href="#" className="icon icon-phone"></a>
        </li>
        <li>
          <a aria-label="email" href="#" className="icon icon-mail"></a>
        </li>
      </ul>
    </div>
  );
}

const CtypePanel = dynamic(() => import('../components/cTypePanel.js'), {
  suspense: true,
});

const CatPanel = dynamic(() => import('../components/catPanel.js'), {
  suspense: true,
});

function MobileMenu({ initData }) {
  const isOPen = useSelector((state) => {
    return state.main.mobileMenuOpen;
  });
  const [currentPanel, setCurrentPanel] = useState('ctype');
  const [catTypeId, setCatTypeId] = useState(null);
  const dispatch = useDispatch();

  let menuPanelClasses = ['Menu__panel-wrapper'];

  const wrapperStyle = {
    width: '300px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '99999',
    height: '100vh',
    overflow: 'hidden',
    transition: 'left 0.35s ease 0s',
  };

  const menuPanelStyle = {
    position: 'absolute',
    top: '0px',
    zIndex: '9999',
    height: '100vh',
    width: '300px',
    backgroundColor: 'rgb(255, 255, 255)',
    left: '0px',
  };

  let shadow;
  if (isOPen) {
    shadow = <div className={mobileMenuStyles.vmenuShadow}></div>;
    menuPanelClasses.push('isActive');
  }

  function loadCatPanel(catTypeId) {
    startTransition(() => {
      setCatTypeId(catTypeId);
      setCurrentPanel('cattype');
    });
  }

  function loadCtypePanel() {
    startTransition(() => {
      setCurrentPanel('ctype');
    });
  }

  useEffect(() => {
    const handleClick = (e) => {
      const element = e.target.closest('.Menu__panel');
      const em = e.target.closest('.megamenu');
      const eleHamburger = e.target.closest('.mmenu');

      if (!element && !em && !eleHamburger) {
        dispatch(setmobileMenuClose());
      }
    };

    if (isOPen) {
      document.addEventListener('click', handleClick);
    } else {
      document.removeEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOPen]);

  let panel;
  if (currentPanel === 'cattype') {
    panel = (
      <CatPanel
        menuPanelStyle={menuPanelStyle}
        onClick={loadCtypePanel}
        initData={initData}
        catTypeId={catTypeId}
      />
    );
  } else {
    panel = (
      <CtypePanel
        menuPanelStyle={menuPanelStyle}
        onClick={loadCatPanel}
        initData={initData}
      />
    );
  }

  return (
    <div className="Menu">
      {shadow}
      <div className={menuPanelClasses.join(' ')} style={wrapperStyle}>
        <Suspense>{panel}</Suspense>
      </div>
    </div>
  );
}

export default function Menu({ initData }) {
  const navClasses = ['container', 'container-lg'];
  const [width, setWidth] = useState(0);
  let stylePanelMenu = { top: '75px' };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width <= 768) {
    navClasses.push('mob-menu');
    stylePanelMenu = null;
  }
  return (
    <nav id="menu" className={navClasses.join(' ')}>
      <div id="panel-menu" style={stylePanelMenu}>
        {width > 768 ? (
          <MegaMenuItems initData={initData} />
        ) : (
          <MobileMenu initData={initData} />
        )}
      </div>
    </nav>
  );
}
