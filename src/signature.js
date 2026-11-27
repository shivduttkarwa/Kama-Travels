const SIGNATURE = `
 ███████╗██╗  ██╗██╗██╗   ██╗
 ██╔════╝██║  ██║██║██║   ██║
 ███████╗███████║██║██║   ██║
 ╚════██║██╔══██║██║╚██╗ ██╔╝
 ███████║██║  ██║██║ ╚████╔╝
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`;

const artStyle = [
  'color: #0066cc',
  'font-family: monospace',
  'font-size: 14px',
  'font-weight: bold',
  'line-height: 1.15',
  'text-shadow: 2px 2px 0 #003580, 4px 4px 0 rgba(255, 107, 53, 0.35)',
].join(';');

const tagStyle = [
  'color: #ffffff',
  'background: linear-gradient(90deg, #003580, #0066cc 60%, #ff6b35)',
  'font-family: monospace',
  'font-size: 12px',
  'letter-spacing: 3px',
  'padding: 6px 14px',
  'border-radius: 4px',
].join(';');

console.log(`%c${SIGNATURE}`, artStyle);
console.log('%c✦ CRAFTED BY SHIV ✦', tagStyle);
