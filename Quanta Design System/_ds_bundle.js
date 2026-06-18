/* @ds-bundle: {"format":3,"namespace":"QuantaDesignSystem_e41436","components":[{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StatCard","sourcePath":"components/display/StatCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data/Sparkline.jsx":"034f7e84272c","components/data/Table.jsx":"273da0bca28d","components/display/Avatar.jsx":"63200cfb8805","components/display/Badge.jsx":"fc14499c2651","components/display/Card.jsx":"97ae8e6786a4","components/display/StatCard.jsx":"5a162fba4a2c","components/display/Tag.jsx":"142a2e676941","components/forms/Button.jsx":"24c0ad4e6259","components/forms/Checkbox.jsx":"8f029bbd50c1","components/forms/IconButton.jsx":"21f3779b2f60","components/forms/Input.jsx":"af0e00b7125f","components/forms/Select.jsx":"d7795a930df4","components/forms/Switch.jsx":"31927480be75","components/navigation/Tabs.jsx":"ab5dd59464e6","ui_kits/dashboard/AreaChart.jsx":"eee50f865eb9","ui_kits/dashboard/EventsScreen.jsx":"44dc9393dc40","ui_kits/dashboard/ExploreScreen.jsx":"cda956b29b4b","ui_kits/dashboard/OverviewScreen.jsx":"078be43ff8a3","ui_kits/dashboard/Sidebar.jsx":"52235cefb088","ui_kits/dashboard/Topbar.jsx":"5c617fc2c8fe","ui_kits/dashboard/data.js":"4f5b6599b7e7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QuantaDesignSystem_e41436 = window.QuantaDesignSystem_e41436 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Minimal inline SVG line chart for trends in tight spaces.
 */
function Sparkline({
  data = [],
  width = 96,
  height = 28,
  color = 'var(--accent)',
  fill = true,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1 || 1);
  const pts = data.map((d, i) => {
    const x = i * stepX;
    const y = height - (d - min) / range * (height - strokeWidth * 2) - strokeWidth;
    return [x, y];
  });
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${width},${height} L0,${height} Z`;
  const gid = React.useId().replace(/:/g, '');
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Config-driven data table. Columns describe header, alignment, width,
 * and an optional cell renderer. Numeric columns get tabular figures.
 */
function Table({
  columns = [],
  data = [],
  rowKey,
  onRowClick,
  dense = false,
  sortBy,
  sortDir = 'asc',
  onSort,
  style,
  ...rest
}) {
  const rowH = dense ? 36 : 44;
  const cellPad = dense ? '0 12px' : '0 14px';
  const [hoverRow, setHoverRow] = React.useState(null);
  const alignToFlex = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, columns.map(c => /*#__PURE__*/React.createElement("col", {
    key: c.key,
    style: {
      width: c.width
    }
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, columns.map(c => {
    const sortable = c.sortable && onSort;
    const isSorted = sortBy === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      onClick: sortable ? () => onSort(c.key) : undefined,
      style: {
        padding: cellPad,
        height: 38,
        textAlign: c.align || 'left',
        borderBottom: '1px solid var(--border-default)',
        cursor: sortable ? 'pointer' : 'default',
        userSelect: 'none',
        fontSize: 11,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        justifyContent: alignToFlex[c.align || 'left'],
        width: '100%'
      }
    }, c.header, isSorted && /*#__PURE__*/React.createElement("i", {
      "data-lucide": sortDir === 'asc' ? 'arrow-up' : 'arrow-down',
      style: {
        width: 12,
        height: 12
      }
    })));
  }))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, i) => {
    const key = rowKey ? rowKey(row, i) : i;
    const hovered = hoverRow === key;
    return /*#__PURE__*/React.createElement("tr", {
      key: key,
      onClick: onRowClick ? () => onRowClick(row, i) : undefined,
      onMouseEnter: () => setHoverRow(key),
      onMouseLeave: () => setHoverRow(null),
      style: {
        height: rowH,
        background: hovered ? 'var(--surface-hover)' : 'transparent',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background var(--dur-fast)'
      }
    }, columns.map(c => {
      const raw = row[c.key];
      const content = c.render ? c.render(raw, row, i) : raw;
      const numeric = c.numeric || c.align === 'right';
      return /*#__PURE__*/React.createElement("td", {
        key: c.key,
        style: {
          padding: cellPad,
          textAlign: c.align || 'left',
          borderBottom: i === data.length - 1 ? 'none' : '1px solid var(--border-subtle)',
          fontSize: 13,
          color: 'var(--text-primary)',
          fontFamily: numeric ? 'var(--font-mono)' : 'var(--font-sans)',
          fontVariantNumeric: numeric ? 'tabular-nums' : 'normal',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, content);
    }));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  xs: 22,
  sm: 28,
  md: 36,
  lg: 44
};
const palette = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)'];
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?';
}
function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return h % mod;
}

/**
 * Round avatar — image, or color-derived initials fallback.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  style,
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const bg = palette[hashIndex(name || 'x', palette.length)];
  const fontSize = Math.round(dim * 0.4);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      background: src ? 'var(--surface-sunken)' : bg,
      color: 'var(--gray-0)',
      fontSize,
      fontWeight: 'var(--weight-semibold)',
      flex: 'none',
      boxShadow: 'inset 0 0 0 1px rgba(11,14,15,0.08)',
      userSelect: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-secondary)',
    dot: 'var(--gray-400)'
  },
  accent: {
    bg: 'var(--accent-subtle)',
    fg: 'var(--accent-active)',
    dot: 'var(--accent)'
  },
  success: {
    bg: 'var(--success-subtle)',
    fg: 'var(--green-600)',
    dot: 'var(--success)'
  },
  warning: {
    bg: 'var(--warning-subtle)',
    fg: 'var(--amber-600)',
    dot: 'var(--warning)'
  },
  danger: {
    bg: 'var(--danger-subtle)',
    fg: 'var(--red-600)',
    dot: 'var(--danger)'
  }
};

/**
 * Compact status label. Optional leading status dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 20,
      padding: '0 8px',
      fontSize: 11,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pads = {
  sm: 14,
  md: 18,
  lg: 24
};

/**
 * Surface container — hairline border, optional header.
 */
function Card({
  children,
  title,
  subtitle,
  actions,
  padding = 'md',
  interactive = false,
  style,
  ...rest
}) {
  const p = pads[padding] ?? pads.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: `${p}px ${p}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 'none'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: p
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KPI metric tile: label, big tabular value, signed delta, optional sparkline.
 */
function StatCard({
  label,
  value,
  delta,
  deltaLabel,
  spark,
  sparkColor,
  icon,
  style,
  ...rest
}) {
  const dir = delta == null ? 0 : delta > 0 ? 1 : delta < 0 ? -1 : 0;
  const deltaColor = dir > 0 ? 'var(--pos)' : dir < 0 ? 'var(--neg)' : 'var(--text-tertiary)';
  const arrow = dir > 0 ? '▲' : dir < 0 ? '▼' : '–';
  const deltaText = typeof delta === 'number' ? `${arrow} ${Math.abs(delta)}%` : delta;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-tertiary)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 28,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, value), spark && /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: spark,
    color: sparkColor || (dir < 0 ? 'var(--neg)' : 'var(--accent)'),
    width: 88,
    height: 30
  })), (delta != null || deltaLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: deltaColor,
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 'var(--weight-medium)'
    }
  }, deltaText), deltaLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, deltaLabel)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Removable filter/keyword tag. Square-ish, hairline.
 */
function Tag({
  children,
  onRemove,
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: onRemove ? '0 5px 0 9px' : '0 9px',
      fontSize: 12,
      color: 'var(--text-secondary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13,
      color: 'var(--text-tertiary)'
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 12,
      height: 12
    }
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 28,
    padding: '0 10px',
    fontSize: 12,
    gap: 6,
    icon: 14
  },
  md: {
    height: 34,
    padding: '0 14px',
    fontSize: 13,
    gap: 7,
    icon: 16
  },
  lg: {
    height: 42,
    padding: '0 20px',
    fontSize: 14,
    gap: 8,
    icon: 18
  }
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--on-accent)',
    border: '1px solid var(--accent)',
    '--hover-bg': 'var(--accent-hover)',
    '--active-bg': 'var(--accent-active)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    '--hover-bg': 'var(--surface-hover)',
    '--active-bg': 'var(--surface-active)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--surface-hover)',
    '--active-bg': 'var(--surface-active)'
  },
  danger: {
    background: 'var(--danger)',
    color: 'var(--on-accent)',
    border: '1px solid var(--danger)',
    '--hover-bg': 'var(--red-600)',
    '--active-bg': 'var(--red-600)'
  }
};

/**
 * Quanta primary action control.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? undefined : active ? v['--active-bg'] : hover ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled || loading,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.005em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: bg,
      color: v.color,
      border: v.border,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast)',
      transform: active && !disabled ? 'translateY(0.5px)' : 'none',
      outline: 'none',
      userSelect: 'none',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }), !loading && iconLeft && /*#__PURE__*/React.createElement(Icon, {
    name: iconLeft,
    size: s.icon
  }), children, !loading && iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: s.icon
  }));
}
function Icon({
  name,
  size
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-block'
    }
  });
}
function Spinner({
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'q-spin 0.7s linear infinite'
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with label. Controlled via `checked` / `onChange`.
 */
function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  style,
  id,
  ...rest
}) {
  const cbId = id || React.useId();
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 16,
      height: 16,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--accent)' : 'var(--surface-card)',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      background: 'var(--on-accent)',
      borderRadius: 1
    }
  }) : on && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 12,
      height: 12,
      color: 'var(--on-accent)',
      strokeWidth: 3
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  md: 34,
  lg: 42
};
const iconSizes = {
  sm: 15,
  md: 17,
  lg: 19
};

/**
 * Square icon-only button.
 */
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  active = false,
  disabled = false,
  label,
  style,
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const bg = active ? 'var(--surface-active)' : hover && !disabled ? 'var(--surface-hover)' : 'transparent';
  const border = variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent';
  const color = active ? 'var(--text-primary)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      background: bg,
      border,
      borderRadius: 'var(--radius-md)',
      color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
      outline: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconSizes[size],
      height: iconSizes[size]
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 30,
    fontSize: 12,
    padding: '0 9px'
  },
  md: {
    height: 36,
    fontSize: 13,
    padding: '0 11px'
  },
  lg: {
    height: 42,
    fontSize: 14,
    padding: '0 13px'
  }
};

/**
 * Text input with optional label, leading icon, and error state.
 */
function Input({
  label,
  hint,
  error,
  size = 'md',
  iconLeft,
  prefix,
  suffix,
  disabled = false,
  style,
  id,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      height: s.height,
      padding: s.padding,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("i", {
    "data-lucide": iconLeft,
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-tertiary)',
      flex: 'none'
    }
  }), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.fontSize,
      color: 'var(--text-tertiary)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.fontSize,
      color: 'var(--text-tertiary)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: error ? 'var(--danger)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 30,
    fontSize: 12,
    padding: '0 30px 0 9px'
  },
  md: {
    height: 36,
    fontSize: 13,
    padding: '0 32px 0 11px'
  },
  lg: {
    height: 42,
    fontSize: 14,
    padding: '0 36px 0 13px'
  }
};

/**
 * Native select styled to match Quanta inputs.
 */
function Select({
  label,
  hint,
  error,
  size = 'md',
  options = [],
  placeholder,
  disabled = false,
  style,
  id,
  value,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    value: value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      color: value === '' && placeholder ? 'var(--text-tertiary)' : 'var(--text-primary)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 15,
      height: 15,
      color: 'var(--text-tertiary)',
      pointerEvents: 'none'
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: error ? 'var(--danger)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dims = {
  sm: {
    w: 30,
    h: 18,
    knob: 14
  },
  md: {
    w: 36,
    h: 21,
    knob: 17
  }
};

/**
 * On/off switch.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  style,
  id,
  ...rest
}) {
  const d = dims[size] || dims.md;
  const swId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: d.w,
      height: d.h,
      flex: 'none',
      background: checked ? 'var(--accent)' : 'var(--gray-300)',
      borderRadius: 'var(--radius-full)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (d.h - d.knob) / 2,
      left: checked ? d.w - d.knob - 2 : 2,
      width: d.knob,
      height: d.knob,
      background: 'var(--gray-0)',
      borderRadius: '50%',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar. Controlled (value/onChange) or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const items = tabs.map(t => typeof t === 'string' ? {
    value: t,
    label: t
  } : t);
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value ?? internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 2,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), items.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.value),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '0 12px',
        height: 36,
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
        cursor: 'pointer',
        transition: 'color var(--dur-fast)'
      }
    }, t.icon && /*#__PURE__*/React.createElement("i", {
      "data-lucide": t.icon,
      style: {
        width: 15,
        height: 15
      }
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: on ? 'var(--text-secondary)' : 'var(--text-disabled)'
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--accent)' : 'transparent',
        borderRadius: '2px 2px 0 0',
        transition: 'background var(--dur-fast)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AreaChart.jsx
try { (() => {
// AreaChart — lightweight multi-series area/line chart for the dashboard.
// Pure SVG, no deps. Exports to window for the UI kit's babel scripts.
function AreaChart({
  series,
  labels,
  height = 240,
  yTicks = 4,
  format = v => v
}) {
  const pad = {
    top: 12,
    right: 8,
    bottom: 26,
    left: 44
  };
  const [w, setW] = React.useState(720);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);
  const innerW = Math.max(10, w - pad.left - pad.right);
  const innerH = height - pad.top - pad.bottom;
  const all = series.flatMap(s => s.data);
  const max = Math.max(...all) * 1.1;
  const min = 0;
  const n = labels.length;
  const x = i => pad.left + i / (n - 1 || 1) * innerW;
  const y = v => pad.top + innerH - (v - min) / (max - min || 1) * innerH;
  const linePath = d => d.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const areaPath = d => `${linePath(d)} L${x(n - 1)},${pad.top + innerH} L${pad.left},${pad.top + innerH} Z`;
  const ticks = Array.from({
    length: yTicks + 1
  }, (_, i) => max / yTicks * i);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: height,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, series.map((s, si) => /*#__PURE__*/React.createElement("linearGradient", {
    key: si,
    id: `qac-${si}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: s.color,
    stopOpacity: "0.16"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: s.color,
    stopOpacity: "0"
  })))), ticks.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: w - pad.right,
    y1: y(t),
    y2: y(t),
    stroke: "var(--border-subtle)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.left - 10,
    y: y(t) + 3,
    textAnchor: "end",
    fontFamily: "var(--font-mono)",
    fontSize: "10",
    fill: "var(--text-tertiary)"
  }, format(Math.round(t))))), series.map((s, si) => /*#__PURE__*/React.createElement("g", {
    key: si
  }, /*#__PURE__*/React.createElement("path", {
    d: areaPath(s.data),
    fill: `url(#qac-${si})`
  }), /*#__PURE__*/React.createElement("path", {
    d: linePath(s.data),
    fill: "none",
    stroke: s.color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), labels.map((l, i) => (i % Math.ceil(n / 7) === 0 || i === n - 1) && /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: height - 8,
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "10",
    fill: "var(--text-tertiary)"
  }, l))));
}
window.AreaChart = AreaChart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AreaChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/EventsScreen.jsx
try { (() => {
// EventsScreen — event stream stats + volume table.
function EventsScreen() {
  const {
    StatCard,
    Card,
    Table,
    Badge,
    Button,
    IconButton
  } = window.QuantaDesignSystem_e41436;
  const D = window.QDATA;
  const maxCount = Math.max(...D.events.map(e => e.count));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Events tracked",
    value: "1.36M",
    delta: 8.2,
    deltaLabel: "vs prev.",
    spark: [40, 42, 44, 43, 47, 52, 58],
    icon: "activity"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Unique events",
    value: "42",
    delta: 2,
    deltaLabel: "new this mo.",
    spark: [36, 37, 38, 38, 40, 41, 42],
    icon: "list"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg / user",
    value: "10.6",
    delta: -1.1,
    deltaLabel: "vs prev.",
    spark: [12, 11.5, 11, 11, 10.8, 10.7, 10.6],
    icon: "gauge"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Event volume",
    subtitle: D.rangeLabel,
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "plus"
    }, "Define event"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'name',
      header: 'Event',
      width: '34%',
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5,
          color: 'var(--text-primary)'
        }
      }, v)
    }, {
      key: 'count',
      header: 'Volume',
      align: 'right',
      width: '24%',
      render: v => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 80,
          height: 6,
          background: 'var(--surface-sunken)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: v / maxCount * 100 + '%',
          height: '100%',
          background: 'var(--chart-1)',
          borderRadius: 'var(--radius-full)'
        }
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums',
          minWidth: 64,
          textAlign: 'right'
        }
      }, v.toLocaleString()))
    }, {
      key: 'users',
      header: 'Users',
      align: 'right',
      render: v => v.toLocaleString()
    }, {
      key: 'change',
      header: 'Change',
      align: 'right',
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: v >= 0 ? 'success' : 'danger'
      }, v >= 0 ? '+' : '', v, "%")
    }],
    data: D.events,
    rowKey: r => r.name,
    onRowClick: () => {}
  }))));
}
window.EventsScreen = EventsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ExploreScreen.jsx
try { (() => {
// ExploreScreen — filter bar + sortable, selectable data table.
function ExploreScreen() {
  const {
    Table,
    Tag,
    Badge,
    Button,
    Sparkline,
    Checkbox,
    Input,
    Select
  } = window.QuantaDesignSystem_e41436;
  const D = window.QDATA;
  const tones = {
    up: 'success',
    down: 'danger',
    flat: 'neutral'
  };
  const [filters, setFilters] = React.useState([{
    id: 'region',
    label: 'Region: EMEA'
  }, {
    id: 'device',
    label: 'Device: Desktop'
  }]);
  const [sortBy, setSortBy] = React.useState('views');
  const [dir, setDir] = React.useState('desc');
  const [selected, setSelected] = React.useState({});
  const onSort = k => {
    if (k === sortBy) setDir(d => d === 'asc' ? 'desc' : 'asc');else {
      setSortBy(k);
      setDir('desc');
    }
  };
  const rows = [...D.pages].sort((a, b) => (dir === 'asc' ? 1 : -1) * (a[sortBy] > b[sortBy] ? 1 : -1));
  const allOn = rows.every(r => selected[r.page]);
  const someOn = !allOn && rows.some(r => selected[r.page]);
  const toggleAll = () => {
    const v = !allOn;
    const next = {};
    rows.forEach(r => next[r.page] = v);
    setSelected(next);
  };
  const selCount = Object.values(selected).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: "Pages",
    options: ['Pages', 'Events', 'Users', 'Sources'],
    style: {
      width: 130
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-default)'
    }
  }), filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f.id,
    icon: "filter",
    onRemove: () => setFilters(s => s.filter(x => x.id !== f.id))
  }, f.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "plus",
    onClick: () => setFilters(s => s.some(x => x.id === 'new') ? s : [...s, {
      id: 'new',
      label: 'Source: Organic'
    }])
  }, "Add filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Filter rows\u2026",
    style: {
      width: 180
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "download"
  }, "Export")), selCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 14px',
      background: 'var(--accent-subtle)',
      border: '1px solid var(--accent-border)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--accent-active)'
    }
  }, selCount, " selected"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "bookmark"
  }, "Save segment"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "bar-chart-2"
  }, "Compare")), /*#__PURE__*/React.createElement(Table, {
    sortBy: sortBy,
    sortDir: dir,
    onSort: onSort,
    columns: [{
      key: '_sel',
      header: /*#__PURE__*/React.createElement(Checkbox, {
        checked: allOn,
        indeterminate: someOn,
        onChange: toggleAll
      }),
      width: '44px',
      render: (_, row) => /*#__PURE__*/React.createElement(Checkbox, {
        checked: !!selected[row.page],
        onChange: () => setSelected(s => ({
          ...s,
          [row.page]: !s[row.page]
        }))
      })
    }, {
      key: 'page',
      header: 'Page',
      width: '28%'
    }, {
      key: 'views',
      header: 'Views',
      align: 'right',
      sortable: true,
      render: v => v.toLocaleString()
    }, {
      key: 'users',
      header: 'Users',
      align: 'right',
      sortable: true,
      render: v => v.toLocaleString()
    }, {
      key: 'conv',
      header: 'Conv. rate',
      align: 'right',
      sortable: true
    }, {
      key: 'trend',
      header: '7-day trend',
      align: 'right',
      width: '130px',
      render: v => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(Sparkline, {
        data: v,
        width: 100,
        height: 26,
        color: v[0] > v[v.length - 1] ? 'var(--neg)' : 'var(--accent)'
      }))
    }, {
      key: 'status',
      header: 'Status',
      width: '90px',
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: tones[v],
        dot: true
      }, v)
    }],
    data: rows,
    rowKey: r => r.page
  }));
}
window.ExploreScreen = ExploreScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ExploreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OverviewScreen.jsx
try { (() => {
// OverviewScreen — KPI row, sessions chart, sources breakdown, top pages.
function OverviewScreen() {
  const {
    StatCard,
    Card,
    Tabs,
    Table,
    Sparkline,
    Badge,
    Button
  } = window.QuantaDesignSystem_e41436;
  const D = window.QDATA;
  const [metric, setMetric] = React.useState('sessions');
  const tones = {
    up: 'success',
    down: 'danger',
    flat: 'neutral'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, D.kpis.map(k => /*#__PURE__*/React.createElement(StatCard, {
    key: k.label,
    label: k.label,
    value: k.value,
    delta: k.delta,
    deltaLabel: "vs prev.",
    spark: k.spark,
    icon: k.icon
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 14,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "q-overline"
  }, "Sessions over time"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, "486,204"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    color: "var(--chart-1)",
    label: "This period"
  }), /*#__PURE__*/React.createElement(Legend, {
    color: "var(--gray-300)",
    label: "Previous"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: metric,
    onChange: setMetric,
    tabs: [{
      value: 'sessions',
      label: 'Sessions'
    }, {
      value: 'users',
      label: 'Users'
    }, {
      value: 'events',
      label: 'Events'
    }]
  }))), /*#__PURE__*/React.createElement(AreaChart, {
    series: D.chartSeries,
    labels: D.chartLabels,
    height: 250,
    format: v => v >= 1000 ? v / 1000 + 'k' : v
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Traffic sources",
    subtitle: D.rangeLabel,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right"
    }, "Details")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 4
    }
  }, D.sources.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-primary)',
      fontWeight: 'var(--weight-medium)'
    }
  }, s.value, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-sunken)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s.value + '%',
      height: '100%',
      background: s.color,
      borderRadius: 'var(--radius-full)'
    }
  })))))), /*#__PURE__*/React.createElement(Card, {
    title: "Top pages",
    subtitle: "By views",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right"
    }, "View all")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Table, {
    dense: true,
    columns: [{
      key: 'page',
      header: 'Page',
      width: '34%'
    }, {
      key: 'views',
      header: 'Views',
      align: 'right',
      render: v => v.toLocaleString()
    }, {
      key: 'conv',
      header: 'Conv.',
      align: 'right'
    }, {
      key: 'trend',
      header: 'Trend',
      align: 'right',
      width: '110px',
      render: v => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(Sparkline, {
        data: v,
        width: 84,
        height: 22,
        color: v[0] > v[v.length - 1] ? 'var(--neg)' : 'var(--accent)'
      }))
    }, {
      key: 'status',
      header: '',
      width: '70px',
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: tones[v],
        dot: true
      }, v)
    }],
    data: D.pages,
    rowKey: r => r.page,
    onRowClick: () => {}
  })))));
}
function Legend({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 3,
      borderRadius: 2,
      background: color
    }
  }), label);
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
// Sidebar — workspace switcher, primary nav, user footer.
function Sidebar({
  active,
  onNavigate
}) {
  const {
    Avatar,
    Badge
  } = window.QuantaDesignSystem_e41436;
  const nav = [{
    key: 'overview',
    label: 'Overview',
    icon: 'layout-dashboard'
  }, {
    key: 'explore',
    label: 'Explore',
    icon: 'table-2'
  }, {
    key: 'events',
    label: 'Events',
    icon: 'activity'
  }, {
    key: 'funnels',
    label: 'Funnels',
    icon: 'filter'
  }, {
    key: 'cohorts',
    label: 'Cohorts',
    icon: 'users-round'
  }, {
    key: 'reports',
    label: 'Reports',
    icon: 'file-bar-chart'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: 'none',
      height: '100%',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 14px 10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '7px 8px',
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "26",
    height: "26",
    alt: "Quanta"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.2,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, "Northwind"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, "Pro workspace")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down",
    style: {
      width: 15,
      height: 15,
      color: 'var(--text-tertiary)'
    }
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '6px 10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "q-overline",
    style: {
      padding: '6px 8px 4px'
    }
  }, "Analyze"), nav.map(n => {
    const on = active === n.key;
    return /*#__PURE__*/React.createElement("button", {
      key: n.key,
      onClick: () => onNavigate(n.key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 8px',
        height: 34,
        background: on ? 'var(--accent-subtle)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        textAlign: 'left',
        color: on ? 'var(--accent-active)' : 'var(--text-secondary)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        fontSize: 13,
        fontFamily: 'var(--font-sans)',
        transition: 'background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": n.icon,
      style: {
        width: 16,
        height: 16
      }
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('settings'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 8px',
      height: 34,
      width: '100%',
      background: active === 'settings' ? 'var(--surface-hover)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontSize: 13,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 16,
      height: 16
    }
  }), " Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '8px',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mara Voss",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "Mara Voss"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, "mara@northwind.co")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "log-out",
    style: {
      width: 15,
      height: 15,
      color: 'var(--text-tertiary)'
    }
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Topbar.jsx
try { (() => {
// Topbar — page title, breadcrumb, search, date range, actions.
function Topbar({
  title,
  range,
  onRange
}) {
  const {
    Button,
    IconButton,
    Select
  } = window.QuantaDesignSystem_e41436;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-h)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 20px',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "\xB7 Northwind")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      position: 'absolute',
      left: 9,
      width: 15,
      height: 15,
      color: 'var(--text-tertiary)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search metrics, events\u2026",
    style: {
      height: 32,
      width: 220,
      padding: '0 10px 0 30px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-primary)',
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: range,
    onChange: e => onRange(e.target.value),
    options: ['Last 7 days', 'Last 30 days', 'Last quarter', 'Year to date'],
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "share-2"
  }, "Share"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: "plus"
  }, "New report"));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/data.js
try { (() => {
// Mock analytics data for the Quanta dashboard UI kit.
const QDATA = {
  rangeLabel: 'Last 30 days',
  kpis: [{
    label: 'Sessions',
    value: '486,204',
    delta: 12.4,
    spark: [30, 32, 31, 35, 38, 36, 41, 44, 48],
    icon: 'mouse-pointer-click'
  }, {
    label: 'Active users',
    value: '128,409',
    delta: 3.2,
    spark: [20, 22, 21, 24, 23, 26, 28, 27, 30],
    icon: 'users'
  }, {
    label: 'Avg. session',
    value: '4m 12s',
    delta: -1.8,
    spark: [9, 8.5, 8.8, 8.2, 8, 7.6, 7.8, 7.4, 7.1],
    icon: 'timer'
  }, {
    label: 'Conversion',
    value: '3.94%',
    delta: 0.6,
    spark: [3.1, 3.2, 3.3, 3.2, 3.5, 3.6, 3.7, 3.8, 3.9],
    icon: 'target'
  }],
  chartLabels: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29'],
  chartSeries: [{
    name: 'This period',
    color: 'var(--chart-1)',
    data: [12, 18, 15, 22, 20, 28, 26, 33, 30, 38, 35, 42, 40, 47, 52]
  }, {
    name: 'Previous',
    color: 'var(--gray-300)',
    data: [14, 15, 16, 17, 18, 19, 21, 22, 24, 25, 27, 28, 30, 31, 33]
  }],
  sources: [{
    name: 'Organic search',
    value: 41,
    color: 'var(--chart-1)'
  }, {
    name: 'Direct',
    value: 24,
    color: 'var(--chart-2)'
  }, {
    name: 'Referral',
    value: 17,
    color: 'var(--chart-3)'
  }, {
    name: 'Social',
    value: 11,
    color: 'var(--chart-4)'
  }, {
    name: 'Email',
    value: 7,
    color: 'var(--chart-5)'
  }],
  pages: [{
    page: '/dashboard',
    views: 84210,
    users: 41200,
    conv: '4.8%',
    trend: [20, 24, 22, 28, 30, 34, 38],
    status: 'up'
  }, {
    page: '/pricing',
    views: 61044,
    users: 38900,
    conv: '6.1%',
    trend: [40, 38, 36, 33, 30, 28, 25],
    status: 'down'
  }, {
    page: '/blog/retention-playbook',
    views: 42190,
    users: 29100,
    conv: '2.3%',
    trend: [10, 12, 15, 14, 18, 22, 26],
    status: 'up'
  }, {
    page: '/integrations',
    views: 33870,
    users: 21050,
    conv: '3.4%',
    trend: [18, 19, 20, 19, 21, 22, 24],
    status: 'up'
  }, {
    page: '/changelog',
    views: 19821,
    users: 14300,
    conv: '1.1%',
    trend: [9, 9, 8, 9, 8, 9, 10],
    status: 'flat'
  }, {
    page: '/docs/api',
    views: 15402,
    users: 9870,
    conv: '0.9%',
    trend: [12, 11, 10, 9, 8, 8, 7],
    status: 'down'
  }],
  events: [{
    name: 'page_view',
    count: 1284907,
    users: 128409,
    change: 8.2
  }, {
    name: 'signup_started',
    count: 48210,
    users: 48210,
    change: 14.1
  }, {
    name: 'checkout_completed',
    count: 12044,
    users: 11890,
    change: -2.3
  }, {
    name: 'report_exported',
    count: 8932,
    users: 4120,
    change: 22.0
  }, {
    name: 'dashboard_shared',
    count: 3401,
    users: 2880,
    change: 5.6
  }]
};
window.QDATA = QDATA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
