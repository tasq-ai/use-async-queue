import{useState as n,useRef as t,useCallback as u,useEffect as r}from"react";export default function(e){var i=e.concurrency;void 0===i&&(i=8);var c=e.done,s=e.drain,o=e.inflight;i<1&&(i=Infinity);var g=n({numPending:0,numInFlight:0,numDone:0}),a=g[0],m=g[1],f=t([]),h=t([]);return r(function(){if(a.numDone>0&&s&&0===f.current.length&&0===h.current.length)return s();for(var n=function(){var n=h.current.shift();f.current.push(n),m(function(n){return Object.assign({},n,{numPending:n.numPending-1,numInFlight:n.numInFlight+1})}),o&&o(Object.assign({},n,{stats:a}));var t=n.task();t.then(function(){f.current.pop(n),m(function(n){return Object.assign({},n,{numInFlight:n.numInFlight-1,numDone:n.numDone+1})}),c&&c(Object.assign({},n,{result:t,stats:a}))}).catch(function(){f.current.pop(n),m(function(n){return Object.assign({},n,{numInFlight:n.numInFlight-1,numDone:n.numDone+1})}),c&&c(Object.assign({},n,{result:t,stats:a}))})};f.current.length<i&&h.current.length>0;)n()},[i,c,s,o,a]),{add:u(function(n){h.current.push(n),m(function(n){return Object.assign({},n,{numPending:n.numPending+1})})},[h]),stats:a}}
//# sourceMappingURL=use-async-queue.module.js.map
