var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'书馆'])
Z([3,'iconfont icon-search'])
Z([3,'true'])
Z(z[3])
Z([3,'../../static/img/share_cover_2.jpg'])
Z([3,'../../static/img/share_cover_3.jpg'])
Z([3,'../../static/img/share_cover_4.jpg'])
Z([3,'main'])
Z([3,'sort'])
Z([3,'全部分类'])
Z([3,'发现你要的书'])
Z([3,'__e'])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'list']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'书单中心'])
Z([3,'全新书单已升级'])
Z([3,'footer'])
Z([3,'list-tit'])
Z([3,'fs-36'])
Z([3,'热门推荐'])
Z(z[12])
Z([3,'book-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'test']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'bookT']])
Z([3,'book'])
Z([[6],[[7],[3,'item']],[3,'bookimg']])
Z([3,'intro'])
Z([a,[[6],[[7],[3,'item']],[3,'bookname']]])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'bookData']])
Z([3,'book'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'titone']]],[1,'']]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'tittwo']]],[1,'']]])
Z([3,'intro'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'bookname']]],[1,'']]])
Z([a,z[8][1]])
Z([a,z[8][1]])
Z([3,'../../static/img/booklist1.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cont'])
Z([3,'title'])
Z([3,'足迹'])
Z([3,'info'])
Z([3,'tit'])
Z([3,'今日阅读'])
Z([3,'170'])
Z([3,'分钟'])
Z([3,'tips-cont'])
Z([3,'我的积分220'])
Z([3,'连续阅读55天'])
Z([3,'积分加成2.5'])
Z([3,'img'])
Z([3,'../../static/img/info_bg.png'])
Z([3,'list-tit'])
Z([3,'fs-36'])
Z([3,'阅读记录'])
Z([3,'fs-26'])
Z([3,'selectBox_list'])
Z([[2,'!'],[[7],[3,'isShowSelect']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z(z[20])
Z([3,'__e'])
Z([3,'selectBox_listLi'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'select']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'dataList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[6],[[7],[3,'item']],[3,'value']]])
Z(z[24])
Z([3,'right-date'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'arrowDown']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[2,'!'],[[7],[3,'isShowSelect']]]])
Z([3,'iconfont icon-liebiao'])
Z([3,'筛选排序'])
Z(z[19])
Z([3,'iconfont icon-close'])
Z([3,'收起选项'])
Z(z[24])
Z([3,'book-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'test']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[20])
Z(z[21])
Z([[7],[3,'footD']])
Z([3,'book'])
Z([[6],[[7],[3,'item']],[3,'bookimg']])
Z([3,'intro'])
Z([3,'fs-26 color-black'])
Z([a,[[6],[[7],[3,'item']],[3,'bookname']]])
Z([3,'fs-20 color-lightblue'])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z([3,'iconread'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'progress']],[1,100]])
Z([3,'iconfont icon-dui color-blue'])
Z(z[51])
Z(z[48])
Z([3,'已读完'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'progress']],[1,100]])
Z(z[48])
Z([a,[[2,'+'],[[2,'+'],[1,'已读'],[[6],[[7],[3,'item']],[3,'progress']]],[1,'%']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'head clearfix'])
Z([3,'跳过登录'])
Z([3,'main'])
Z([3,'妙读'])
Z([3,'一刻钟读世界万千'])
Z([3,'enter1'])
Z([3,'primary'])
Z([3,'淘宝登录'])
Z(z[7])
Z([3,'微信登录'])
Z([3,'enter2'])
Z([3,'支付宝登录'])
Z([3,'|'])
Z([3,'微博登录'])
Z([3,'已阅读并同意....'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'booklist-collect'])
Z([3,'../../static/img/img_empty_collect.png'])
Z([3,'fs-26'])
Z([3,'收藏暂无内容'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'books-collect'])
Z([3,'../../static/img/img_empty_collect.png'])
Z([3,'fs-26'])
Z([3,'收藏暂无内容'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pic'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main'])
Z([3,'download'])
Z([3,'../../static/img/img_wm_empty.png'])
Z([3,'fs-26'])
Z([3,'收藏暂无内容'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my'])
Z([3,'info'])
Z([3,'name'])
Z([3,'Hi !'])
Z([3,'Yooye'])
Z([3,'../../static/img/icon_account_head.png'])
Z([3,'intro'])
Z([3,'积分商城'])
Z([3,'iconfont icon-right'])
Z([3,'__e'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'download']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'下载中心'])
Z(z[8])
Z(z[9])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'booksCollect']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'书籍收藏'])
Z(z[8])
Z(z[9])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'booklistCollect']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'书单收藏'])
Z(z[8])
Z(z[9])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'sentenceCollect']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'金句收藏'])
Z(z[8])
Z(z[9])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'commend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'推荐好友'])
Z(z[8])
Z(z[6])
Z([3,'设置'])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'collect'])
Z([3,'../../static/img/img_empty_collect.png'])
Z([3,'fs-26'])
Z([3,'收藏暂无内容'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'detail'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dt']])
Z([3,'main'])
Z([3,'true'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'bookname']]])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z([3,'scrap'])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'titone']],[1,'，']],[[6],[[7],[3,'item']],[3,'tittwo']]]])
Z([a,[[6],[[7],[3,'item']],[3,'info']]])
Z([3,'footer'])
Z([3,'download'])
Z([3,'iconfont icon-download'])
Z([3,'下载'])
Z([3,'collect'])
Z([3,'iconfont icon-collect'])
Z([3,'收藏'])
Z([3,'畅听'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'test']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'阅读'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'book'])
Z([3,'header'])
Z([3,'妙读'])
Z([3,'iconfont icon-search'])
Z([3,'88upx'])
Z([3,'50upx'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'readR']])
Z([3,'__e'])
Z([3,'main'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'test']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[7],[3,'img']]],[1,')']]],[1,';']])
Z([3,'fs-45'])
Z([a,[[6],[[7],[3,'item']],[3,'titone']]])
Z(z[13])
Z([a,[[6],[[7],[3,'item']],[3,'tittwo']]])
Z([3,'fs-26'])
Z([a,[[6],[[7],[3,'item']],[3,'bookname']]])
Z([3,'fs-24'])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z([3,'read'])
Z([3,'iconfont icon-listen'])
Z([3,'once fs-24'])
Z([3,'马上畅读'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'readS']])
Z([3,'main'])
Z([3,'true'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'info'])
Z([a,[[6],[[7],[3,'item']],[3,'words']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/book/book.wxml','./pages/booklist/booklist.wxml','./pages/footprint/footprint.wxml','./pages/index/index.wxml','./pages/my/booklist-collect.wxml','./pages/my/books-collect.wxml','./pages/my/commend.wxml','./pages/my/download.wxml','./pages/my/my.wxml','./pages/my/sentence-collect.wxml','./pages/read/detail.wxml','./pages/read/read.wxml','./pages/read/readstory.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_n('text')
var fE=_oz(z,1,e,s,gg)
_(oD,fE)
_(xC,oD)
var cF=_n('view')
_rz(z,cF,'class',2,e,s,gg)
_(xC,cF)
_(oB,xC)
var hG=_mz(z,'swiper',['autoplay',3,'circular',1],[],e,s,gg)
var oH=_n('swiper-item')
var cI=_mz(z,'image',['mode',-1,'src',5],[],e,s,gg)
_(oH,cI)
_(hG,oH)
var oJ=_n('swiper-item')
var lK=_mz(z,'image',['mode',-1,'src',6],[],e,s,gg)
_(oJ,lK)
_(hG,oJ)
var aL=_n('swiper-item')
var tM=_mz(z,'image',['mode',-1,'src',7],[],e,s,gg)
_(aL,tM)
_(hG,aL)
_(oB,hG)
var eN=_n('view')
_rz(z,eN,'class',8,e,s,gg)
var bO=_n('view')
_rz(z,bO,'class',9,e,s,gg)
var oP=_n('text')
var xQ=_oz(z,10,e,s,gg)
_(oP,xQ)
_(bO,oP)
var oR=_n('text')
var fS=_oz(z,11,e,s,gg)
_(oR,fS)
_(bO,oR)
_(eN,bO)
var cT=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],e,s,gg)
var hU=_n('text')
var oV=_oz(z,15,e,s,gg)
_(hU,oV)
_(cT,hU)
var cW=_n('text')
var oX=_oz(z,16,e,s,gg)
_(cW,oX)
_(cT,cW)
_(eN,cT)
_(oB,eN)
var lY=_n('view')
_rz(z,lY,'class',17,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',18,e,s,gg)
var t1=_n('text')
_rz(z,t1,'class',19,e,s,gg)
var e2=_oz(z,20,e,s,gg)
_(t1,e2)
_(aZ,t1)
_(lY,aZ)
var b3=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var o4=_v()
_(b3,o4)
var x5=function(f7,o6,c8,gg){
var o0=_n('view')
_rz(z,o0,'class',27,f7,o6,gg)
var cAB=_mz(z,'image',['mode',-1,'src',28],[],f7,o6,gg)
_(o0,cAB)
var oBB=_n('view')
_rz(z,oBB,'class',29,f7,o6,gg)
var lCB=_n('text')
var aDB=_oz(z,30,f7,o6,gg)
_(lCB,aDB)
_(oBB,lCB)
var tEB=_n('text')
var eFB=_oz(z,31,f7,o6,gg)
_(tEB,eFB)
_(oBB,tEB)
_(o0,oBB)
_(c8,o0)
return c8
}
o4.wxXCkey=2
_2z(z,26,x5,e,s,gg,o4,'item','index','')
_(lY,b3)
_(oB,lY)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oHB=_n('view')
var xIB=_v()
_(oHB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_n('view')
_rz(z,cOB,'class',3,cLB,fKB,gg)
var oPB=_n('view')
_rz(z,oPB,'class',4,cLB,fKB,gg)
var lQB=_n('view')
var aRB=_oz(z,5,cLB,fKB,gg)
_(lQB,aRB)
_(oPB,lQB)
var tSB=_n('view')
var eTB=_oz(z,6,cLB,fKB,gg)
_(tSB,eTB)
_(oPB,tSB)
_(cOB,oPB)
var bUB=_n('view')
_rz(z,bUB,'class',7,cLB,fKB,gg)
var oVB=_n('view')
var xWB=_oz(z,8,cLB,fKB,gg)
_(oVB,xWB)
_(bUB,oVB)
var oXB=_n('view')
var fYB=_oz(z,9,cLB,fKB,gg)
_(oXB,fYB)
_(bUB,oXB)
var cZB=_n('view')
var h1B=_oz(z,10,cLB,fKB,gg)
_(cZB,h1B)
_(bUB,cZB)
_(cOB,bUB)
var o2B=_mz(z,'image',['mode',-1,'src',11],[],cLB,fKB,gg)
_(cOB,o2B)
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=2
_2z(z,2,oJB,e,s,gg,xIB,'item','index','')
_(r,oHB)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var o4B=_n('view')
_rz(z,o4B,'class',0,e,s,gg)
var l5B=_n('view')
_rz(z,l5B,'class',1,e,s,gg)
var a6B=_oz(z,2,e,s,gg)
_(l5B,a6B)
_(o4B,l5B)
var t7B=_n('view')
_rz(z,t7B,'class',3,e,s,gg)
var e8B=_n('view')
_rz(z,e8B,'class',4,e,s,gg)
var b9B=_oz(z,5,e,s,gg)
_(e8B,b9B)
var o0B=_n('text')
var xAC=_oz(z,6,e,s,gg)
_(o0B,xAC)
_(e8B,o0B)
var oBC=_oz(z,7,e,s,gg)
_(e8B,oBC)
_(t7B,e8B)
var fCC=_n('view')
_rz(z,fCC,'class',8,e,s,gg)
var cDC=_n('text')
var hEC=_oz(z,9,e,s,gg)
_(cDC,hEC)
_(fCC,cDC)
var oFC=_n('text')
var cGC=_oz(z,10,e,s,gg)
_(oFC,cGC)
_(fCC,oFC)
var oHC=_n('text')
var lIC=_oz(z,11,e,s,gg)
_(oHC,lIC)
_(fCC,oHC)
_(t7B,fCC)
var aJC=_n('view')
_rz(z,aJC,'class',12,e,s,gg)
var tKC=_mz(z,'image',['mode',-1,'src',13],[],e,s,gg)
_(aJC,tKC)
_(t7B,aJC)
_(o4B,t7B)
var eLC=_n('view')
_rz(z,eLC,'class',14,e,s,gg)
var bMC=_n('text')
_rz(z,bMC,'class',15,e,s,gg)
var oNC=_oz(z,16,e,s,gg)
_(bMC,oNC)
_(eLC,bMC)
var xOC=_n('view')
_rz(z,xOC,'class',17,e,s,gg)
var oPC=_mz(z,'view',['class',18,'hidden',1],[],e,s,gg)
var fQC=_v()
_(oPC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_mz(z,'view',['catchtap',24,'class',1,'data-event-opts',2],[],oTC,hSC,gg)
var aXC=_oz(z,27,oTC,hSC,gg)
_(lWC,aXC)
_(cUC,lWC)
return cUC
}
fQC.wxXCkey=2
_2z(z,22,cRC,e,s,gg,fQC,'item','index','index')
_(xOC,oPC)
var tYC=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],e,s,gg)
var eZC=_n('view')
_rz(z,eZC,'hidden',31,e,s,gg)
var b1C=_n('text')
_rz(z,b1C,'class',32,e,s,gg)
_(eZC,b1C)
var o2C=_oz(z,33,e,s,gg)
_(eZC,o2C)
_(tYC,eZC)
var x3C=_n('view')
_rz(z,x3C,'hidden',34,e,s,gg)
var o4C=_n('text')
_rz(z,o4C,'class',35,e,s,gg)
_(x3C,o4C)
var f5C=_oz(z,36,e,s,gg)
_(x3C,f5C)
_(tYC,x3C)
_(xOC,tYC)
_(eLC,xOC)
_(o4B,eLC)
var c6C=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],e,s,gg)
var h7C=_v()
_(c6C,h7C)
var o8C=function(o0C,c9C,lAD,gg){
var tCD=_n('view')
_rz(z,tCD,'class',43,o0C,c9C,gg)
var eDD=_mz(z,'image',['mode',-1,'src',44],[],o0C,c9C,gg)
_(tCD,eDD)
var bED=_n('view')
_rz(z,bED,'class',45,o0C,c9C,gg)
var oFD=_n('text')
_rz(z,oFD,'class',46,o0C,c9C,gg)
var xGD=_oz(z,47,o0C,c9C,gg)
_(oFD,xGD)
_(bED,oFD)
var oHD=_n('text')
_rz(z,oHD,'class',48,o0C,c9C,gg)
var fID=_oz(z,49,o0C,c9C,gg)
_(oHD,fID)
_(bED,oHD)
var cJD=_n('view')
var oLD=_n('view')
_rz(z,oLD,'class',50,o0C,c9C,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,51,o0C,c9C,gg)){cMD.wxVkey=1
var lOD=_n('text')
_rz(z,lOD,'class',52,o0C,c9C,gg)
_(cMD,lOD)
}
var oND=_v()
_(oLD,oND)
if(_oz(z,53,o0C,c9C,gg)){oND.wxVkey=1
var aPD=_n('text')
_rz(z,aPD,'class',54,o0C,c9C,gg)
var tQD=_oz(z,55,o0C,c9C,gg)
_(aPD,tQD)
_(oND,aPD)
}
cMD.wxXCkey=1
oND.wxXCkey=1
_(cJD,oLD)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,56,o0C,c9C,gg)){hKD.wxVkey=1
var eRD=_n('text')
_rz(z,eRD,'class',57,o0C,c9C,gg)
var bSD=_oz(z,58,o0C,c9C,gg)
_(eRD,bSD)
_(hKD,eRD)
}
hKD.wxXCkey=1
_(bED,cJD)
_(tCD,bED)
_(lAD,tCD)
return lAD
}
h7C.wxXCkey=2
_2z(z,42,o8C,e,s,gg,h7C,'item','index','')
_(o4B,c6C)
_(r,o4B)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'class',1,e,s,gg)
var fWD=_n('text')
var cXD=_oz(z,2,e,s,gg)
_(fWD,cXD)
_(oVD,fWD)
_(xUD,oVD)
var hYD=_n('view')
_rz(z,hYD,'class',3,e,s,gg)
var oZD=_n('text')
var c1D=_oz(z,4,e,s,gg)
_(oZD,c1D)
_(hYD,oZD)
var o2D=_n('text')
var l3D=_oz(z,5,e,s,gg)
_(o2D,l3D)
_(hYD,o2D)
_(xUD,hYD)
var a4D=_n('view')
_rz(z,a4D,'class',6,e,s,gg)
var t5D=_n('button')
_rz(z,t5D,'type',7,e,s,gg)
var e6D=_oz(z,8,e,s,gg)
_(t5D,e6D)
_(a4D,t5D)
var b7D=_n('button')
_rz(z,b7D,'type',9,e,s,gg)
var o8D=_oz(z,10,e,s,gg)
_(b7D,o8D)
_(a4D,b7D)
_(xUD,a4D)
var x9D=_n('view')
_rz(z,x9D,'class',11,e,s,gg)
var o0D=_n('button')
var fAE=_oz(z,12,e,s,gg)
_(o0D,fAE)
_(x9D,o0D)
var cBE=_n('text')
var hCE=_oz(z,13,e,s,gg)
_(cBE,hCE)
_(x9D,cBE)
var oDE=_n('button')
var cEE=_oz(z,14,e,s,gg)
_(oDE,cEE)
_(x9D,oDE)
_(xUD,x9D)
var oFE=_n('view')
var lGE=_n('view')
_(oFE,lGE)
var aHE=_n('text')
var tIE=_oz(z,15,e,s,gg)
_(aHE,tIE)
_(oFE,aHE)
_(xUD,oFE)
_(r,xUD)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bKE=_n('view')
var oLE=_n('view')
_rz(z,oLE,'class',0,e,s,gg)
var xME=_mz(z,'image',['mode',-1,'src',1],[],e,s,gg)
_(oLE,xME)
var oNE=_n('text')
_rz(z,oNE,'class',2,e,s,gg)
var fOE=_oz(z,3,e,s,gg)
_(oNE,fOE)
_(oLE,oNE)
_(bKE,oLE)
_(r,bKE)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hQE=_n('view')
var oRE=_n('view')
_rz(z,oRE,'class',0,e,s,gg)
var cSE=_mz(z,'image',['mode',-1,'src',1],[],e,s,gg)
_(oRE,cSE)
var oTE=_n('text')
_rz(z,oTE,'class',2,e,s,gg)
var lUE=_oz(z,3,e,s,gg)
_(oTE,lUE)
_(oRE,oTE)
_(hQE,oRE)
_(r,hQE)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var tWE=_n('view')
var eXE=_n('view')
_rz(z,eXE,'class',0,e,s,gg)
_(tWE,eXE)
_(r,tWE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oZE=_n('view')
_rz(z,oZE,'class',0,e,s,gg)
var x1E=_n('view')
_rz(z,x1E,'class',1,e,s,gg)
var o2E=_mz(z,'image',['mode',-1,'src',2],[],e,s,gg)
_(x1E,o2E)
var f3E=_n('text')
_rz(z,f3E,'class',3,e,s,gg)
var c4E=_oz(z,4,e,s,gg)
_(f3E,c4E)
_(x1E,f3E)
_(oZE,x1E)
_(r,oZE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o6E=_n('view')
_rz(z,o6E,'class',0,e,s,gg)
var c7E=_n('view')
_rz(z,c7E,'class',1,e,s,gg)
var o8E=_n('view')
_rz(z,o8E,'class',2,e,s,gg)
var l9E=_n('text')
var a0E=_oz(z,3,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_n('text')
var eBF=_oz(z,4,e,s,gg)
_(tAF,eBF)
_(o8E,tAF)
_(c7E,o8E)
var bCF=_mz(z,'image',['mode',-1,'src',5],[],e,s,gg)
_(c7E,bCF)
_(o6E,c7E)
var oDF=_n('view')
_rz(z,oDF,'class',6,e,s,gg)
var xEF=_n('text')
var oFF=_oz(z,7,e,s,gg)
_(xEF,oFF)
_(oDF,xEF)
var fGF=_n('text')
_rz(z,fGF,'class',8,e,s,gg)
_(oDF,fGF)
_(o6E,oDF)
var cHF=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var hIF=_n('text')
var oJF=_oz(z,12,e,s,gg)
_(hIF,oJF)
_(cHF,hIF)
var cKF=_n('text')
_rz(z,cKF,'class',13,e,s,gg)
_(cHF,cKF)
_(o6E,cHF)
var oLF=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var lMF=_n('text')
var aNF=_oz(z,17,e,s,gg)
_(lMF,aNF)
_(oLF,lMF)
var tOF=_n('text')
_rz(z,tOF,'class',18,e,s,gg)
_(oLF,tOF)
_(o6E,oLF)
var ePF=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
var bQF=_n('text')
var oRF=_oz(z,22,e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_n('text')
_rz(z,xSF,'class',23,e,s,gg)
_(ePF,xSF)
_(o6E,ePF)
var oTF=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],e,s,gg)
var fUF=_n('text')
var cVF=_oz(z,27,e,s,gg)
_(fUF,cVF)
_(oTF,fUF)
var hWF=_n('text')
_rz(z,hWF,'class',28,e,s,gg)
_(oTF,hWF)
_(o6E,oTF)
var oXF=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
var cYF=_n('text')
var oZF=_oz(z,32,e,s,gg)
_(cYF,oZF)
_(oXF,cYF)
var l1F=_n('text')
_rz(z,l1F,'class',33,e,s,gg)
_(oXF,l1F)
_(o6E,oXF)
var a2F=_n('view')
_rz(z,a2F,'class',34,e,s,gg)
var t3F=_n('text')
var e4F=_oz(z,35,e,s,gg)
_(t3F,e4F)
_(a2F,t3F)
var b5F=_n('text')
_rz(z,b5F,'class',36,e,s,gg)
_(a2F,b5F)
_(o6E,a2F)
_(r,o6E)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var x7F=_n('view')
var o8F=_n('view')
_rz(z,o8F,'class',0,e,s,gg)
var f9F=_mz(z,'image',['mode',-1,'src',1],[],e,s,gg)
_(o8F,f9F)
var c0F=_n('text')
_rz(z,c0F,'class',2,e,s,gg)
var hAG=_oz(z,3,e,s,gg)
_(c0F,hAG)
_(o8F,c0F)
_(x7F,o8F)
_(r,x7F)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cCG=_n('view')
_rz(z,cCG,'class',0,e,s,gg)
var oDG=_n('swiper')
var lEG=_v()
_(oDG,lEG)
var aFG=function(eHG,tGG,bIG,gg){
var xKG=_n('swiper-item')
var oLG=_n('view')
_rz(z,oLG,'class',4,eHG,tGG,gg)
var fMG=_n('scroll-view')
_rz(z,fMG,'scrollY',5,eHG,tGG,gg)
var cNG=_n('view')
_rz(z,cNG,'class',6,eHG,tGG,gg)
var hOG=_n('text')
var oPG=_oz(z,7,eHG,tGG,gg)
_(hOG,oPG)
_(cNG,hOG)
var cQG=_n('text')
var oRG=_oz(z,8,eHG,tGG,gg)
_(cQG,oRG)
_(cNG,cQG)
_(fMG,cNG)
var lSG=_n('view')
_rz(z,lSG,'class',9,eHG,tGG,gg)
var aTG=_n('text')
var tUG=_oz(z,10,eHG,tGG,gg)
_(aTG,tUG)
_(lSG,aTG)
var eVG=_n('text')
var bWG=_oz(z,11,eHG,tGG,gg)
_(eVG,bWG)
_(lSG,eVG)
_(fMG,lSG)
_(oLG,fMG)
_(xKG,oLG)
_(bIG,xKG)
return bIG
}
lEG.wxXCkey=2
_2z(z,3,aFG,e,s,gg,lEG,'item','index','')
_(cCG,oDG)
var oXG=_n('view')
_rz(z,oXG,'class',12,e,s,gg)
var xYG=_n('view')
_rz(z,xYG,'class',13,e,s,gg)
var oZG=_n('view')
_rz(z,oZG,'class',14,e,s,gg)
_(xYG,oZG)
var f1G=_n('text')
var c2G=_oz(z,15,e,s,gg)
_(f1G,c2G)
_(xYG,f1G)
_(oXG,xYG)
var h3G=_n('view')
_rz(z,h3G,'class',16,e,s,gg)
var o4G=_n('view')
_rz(z,o4G,'class',17,e,s,gg)
_(h3G,o4G)
var c5G=_n('text')
var o6G=_oz(z,18,e,s,gg)
_(c5G,o6G)
_(h3G,c5G)
_(oXG,h3G)
var l7G=_n('button')
var a8G=_oz(z,19,e,s,gg)
_(l7G,a8G)
_(oXG,l7G)
var t9G=_mz(z,'button',['bindtap',20,'data-event-opts',1],[],e,s,gg)
var e0G=_oz(z,22,e,s,gg)
_(t9G,e0G)
_(oXG,t9G)
_(cCG,oXG)
_(r,cCG)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oBH=_n('view')
_rz(z,oBH,'class',0,e,s,gg)
var xCH=_n('view')
_rz(z,xCH,'class',1,e,s,gg)
var oDH=_n('text')
var fEH=_oz(z,2,e,s,gg)
_(oDH,fEH)
_(xCH,oDH)
var cFH=_n('view')
_rz(z,cFH,'class',3,e,s,gg)
_(xCH,cFH)
_(oBH,xCH)
var hGH=_mz(z,'swiper',['nextMargin',4,'previousMargin',1],[],e,s,gg)
var oHH=_v()
_(hGH,oHH)
var cIH=function(lKH,oJH,aLH,gg){
var eNH=_n('swiper-item')
var bOH=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'style',3],[],lKH,oJH,gg)
var oPH=_n('text')
_rz(z,oPH,'class',13,lKH,oJH,gg)
var xQH=_oz(z,14,lKH,oJH,gg)
_(oPH,xQH)
_(bOH,oPH)
var oRH=_n('text')
_rz(z,oRH,'class',15,lKH,oJH,gg)
var fSH=_oz(z,16,lKH,oJH,gg)
_(oRH,fSH)
_(bOH,oRH)
var cTH=_n('text')
_rz(z,cTH,'class',17,lKH,oJH,gg)
var hUH=_oz(z,18,lKH,oJH,gg)
_(cTH,hUH)
_(bOH,cTH)
var oVH=_n('text')
_rz(z,oVH,'class',19,lKH,oJH,gg)
var cWH=_oz(z,20,lKH,oJH,gg)
_(oVH,cWH)
_(bOH,oVH)
var oXH=_n('view')
_rz(z,oXH,'class',21,lKH,oJH,gg)
var lYH=_n('text')
_rz(z,lYH,'class',22,lKH,oJH,gg)
_(oXH,lYH)
var aZH=_n('view')
_rz(z,aZH,'class',23,lKH,oJH,gg)
var t1H=_oz(z,24,lKH,oJH,gg)
_(aZH,t1H)
_(oXH,aZH)
_(bOH,oXH)
_(eNH,bOH)
_(aLH,eNH)
return aLH
}
oHH.wxXCkey=2
_2z(z,8,cIH,e,s,gg,oHH,'item','index','')
_(oBH,hGH)
_(r,oBH)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var b3H=_n('view')
var o4H=_n('swiper')
var x5H=_v()
_(o4H,x5H)
var o6H=function(c8H,f7H,h9H,gg){
var cAI=_n('swiper-item')
var oBI=_n('view')
_rz(z,oBI,'class',3,c8H,f7H,gg)
var lCI=_n('scroll-view')
_rz(z,lCI,'scrollY',4,c8H,f7H,gg)
var aDI=_n('view')
_rz(z,aDI,'class',5,c8H,f7H,gg)
var tEI=_oz(z,6,c8H,f7H,gg)
_(aDI,tEI)
_(lCI,aDI)
var eFI=_n('view')
_rz(z,eFI,'class',7,c8H,f7H,gg)
var bGI=_oz(z,8,c8H,f7H,gg)
_(eFI,bGI)
_(lCI,eFI)
_(oBI,lCI)
_(cAI,oBI)
_(h9H,cAI)
return h9H
}
x5H.wxXCkey=2
_2z(z,2,o6H,e,s,gg,x5H,'item','index','')
_(b3H,o4H)
_(r,b3H)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face {font-family: \x22iconfont\x22; src: url(/static/css/iconfont.eot?t\x3d1568723467393-do-not-use-local-path-./common/main.wxss\x262\x267); src: url(/static/css/iconfont.eot?t\x3d1568723467393#iefix-do-not-use-local-path-./common/main.wxss\x267\x267) format(\x27embedded-opentype\x27), /* IE6-IE8 */\n  url(data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAXwAAsAAAAAC0gAAAWhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEIAqILIZpATYCJAMoCxYABCAFhG0HdRukCVFUcZrIfiTYthxWCA/ZWpBS6JyZHiqCMdT/CKK1snpmdg8fWCUK0bMk8gQKHOqoRCggI1koYGEmJNnd/L+b/oWgqSgyz0wq7oGJ0uSG0qWEE0LFFKk5c/82peyJyd96AZD7398fqmae5wIyn32Ly1zLxgQMBTAXoOzOjWlpTm1JC2Adxi5M4HgCfYsdwNuVnosDiUJZFoiLOq0GSEJaJYcUuoo2Zdsi7hDqplvpOW7bvx8/bQoJSZMp6+4/nUaCxAqqPTePdMzE4LVnBrUTGWsAhXicar0LEDe6BqIv/AUELgFmeUKUqqI/LtSMWlJrame1VvtoqNpK/zCrVgM9WaMzY3Gi//EK0cLSISRei/WoQOf6MhQiMlWBaKgZiA61BNGl1iCC2olIVCuipdr551PaN7eZBUwDsRGIhxT5bjs/S7JQMTllMNafbQXoPe2ViZRr3L2HruWq643XGwuhEc6+PX78lHDq+W63lafrAO+oGsdV+EGV+mDd2zX0/eHX75s/FL1x9H0qeeds+Ugei8PVCSc9wDi95KpT/WptAbT3Pdyvyjw9I1NN3HXpsyts5+dm5epzt3Zcc4LvldHn8HPgvXeUuHlaNrNXZpGZl1HrKtp7pvnsTptdYX+2377hoG1uvVVubOGZfU+Ze8+1KA6qrS3n7TKNRVYXR8JYykhZb0zLIGmeuanQQsvtOTmltc3e8q1zv/V2MzL3LsKlz9JsRlucqORPnN3pYT+/AZk8Fx5rbbG5uNx8s4k//bqUUfEQ+nL6LIDfbPb17ZWrrZM2u0x10LZiMfviZmJtTe10HnQ4VO/fO2zIgiIcPhVCFave36YcblZJnu5t39n+VKKS/y00SQ0DaMj88HwI+hp8hQaRfpDxKM721msiiFB5RWEeCEzuwlvDc6yAKU8Pb5nWxqRrW0KmW8LJyhDuJBEtR5Ebd7q++LKyMhWMn38Z//KVvh4I4p3yt+YYDjXGZufWxzoHcu1dlzM5UnQxgVjA5JKgZUf5fFLgOnLqUsQSKrrwVMDraNLv07CiLSY5tphANBQFfP11USHmdLgdiXP30e6isNexRxZuRp37P2NfSZ6DWrDcBIBbt/Rj13qvjd1/f6du1L3Rq3lc+rHbDexHXO6dVNa539cHRBf27P1jYuLLvXug6Etb/cceMvDn5Nk/w6sEgX/LNg93Sxlp17Afet/nAeqn/EvEiP80bDb8KWZEfyn90Ac+91G/4a58U3fkV8KqpU+k932eSR9LHzS7KiI52V9F8R5OwsbTVbSJf3E8rasOB5cu1iJLD/l1/NqlpVpr3cVHSC1St7hYF3uS19TEO6mqmxoNC6+x0U9tbNqa9913X2j3A26+ABj9kZV5HUC+wv8P8ln+BYC8jf8VpCdpGhj9n8quZfA/ki/zfxMfqSOL6zjn/6OcJydi/3S5dwNfVn9he0d/FNBPrCtRmveg80p2FFGg6PqFb07nf0+xvRCeg2H6+ni8ndO+bFs+Vzqf0DXnQ9KxCLKuJdhCXAONgS3Q6toKfatl7Dwwg4WI0sMqHQDCpMuQjHsO2aQX2EL8Ahrz/oDWZCDQdzR89jmwLHRoCgs1HCSx0hpMRzB6SjNwqFNYDLUmWsMGBTZFDVmjLoAF+QdGExlQD9k2NjBWaoM5jsIolqnA0sHJIE0zmIFlyiHB+ZdxnCE6IIBKuyJ/gqkAqJ1YkAYHImFK1cDoEBh6lNmfg8Z+vhikZULTYHNqCsxqEMtINzomiL/AEtgMqb5UzbFMNqqkFYzDofAiCotRAZMOzRCtRhkYQ/qschCB46+sRtggWgDqRZWV+vcvrzjagn+njnKRfqTIUaKJNjrRjV70Y6BzgqHphb0hhDTpxLQOluo0jIjWGTmoF7I6bRknoCHFCQmaMUIJyVTpaUZDioxQwxJlAAAAAAA\x3d) format(\x27woff2\x27),\n  url(/static/css/iconfont.woff?t\x3d1568723467393-do-not-use-local-path-./common/main.wxss\x267\x267) format(\x27woff\x27),\n  url(/static/css/iconfont.ttf?t\x3d1568723467393-do-not-use-local-path-./common/main.wxss\x267\x267) format(\x27truetype\x27), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url(/static/css/iconfont.svg?t\x3d1568723467393#iconfont-do-not-use-local-path-./common/main.wxss\x267\x267) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: ",[0,30],"; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-collect:before { content: \x22\\E679\x22; }\n.",[1],"icon-dui:before { content: \x22\\E686\x22; }\n.",[1],"icon-liebiao:before { content: \x22\\E60A\x22; }\n.",[1],"icon-listen:before { content: \x22\\E6A7\x22; }\n.",[1],"icon-right:before { content: \x22\\E617\x22; }\n.",[1],"icon-left:before { content: \x22\\E696\x22; }\n.",[1],"icon-close:before { content: \x22\\E647\x22; }\n.",[1],"icon-download:before { content: \x22\\E653\x22; }\n.",[1],"icon-search:before { content: \x22\\E600\x22; }\n.",[1],"fs-20 { font-size: ",[0,20]," !important; }\n.",[1],"fs-24 { font-size: ",[0,24]," !important; }\n.",[1],"fs-26 { font-size: ",[0,26]," !important; }\n.",[1],"fs-28 { font-size: ",[0,28]," !important; }\n.",[1],"fs-30 { font-size: ",[0,30]," !important; }\n.",[1],"fs-32 { font-size: ",[0,32]," !important; }\n.",[1],"fs-36 { font-size: ",[0,36]," !important; }\n.",[1],"fs-45 { font-size: ",[0,45]," !important; }\n.",[1],"color-lightblue { color: #818da8; }\n.",[1],"color-black { color: #171818; }\n.",[1],"color-blue { color: #5a77ba; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/book/book.wxss']=setCssToHead([".",[1],"header { font-size: ",[0,62],"; margin: ",[0,100]," ",[0,36]," ",[0,50]," ",[0,36],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"iconfont { font-size: ",[0,60],"; }\nwx-swiper-item wx-image { width: 100%; }\n.",[1],"main { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"sort, .",[1],"list { width: ",[0,340],"; height: ",[0,120],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding-left: ",[0,26],"; color: #FFFFFF; }\n.",[1],"sort { background: #4db9d6; margin: ",[0,45]," ",[0,10]," ",[0,45]," ",[0,20],"; }\n.",[1],"list { background: #e9b360; margin: ",[0,45]," ",[0,20]," ",[0,45]," ",[0,10],"; }\n.",[1],"sort wx-text:nth-child(1), .",[1],"list wx-text:nth-child(1) { font-size: ",[0,28],"; padding-top: ",[0,30],"; padding-bottom: ",[0,8],"; }\n.",[1],"sort wx-text:nth-child(2), .",[1],"list wx-text:nth-child(2) { font-size: ",[0,22],"; }\n.",[1],"footer { margin: 0 ",[0,25],"; }\n.",[1],"list-tit { font-weight: bold; line-height: ",[0,130],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-top: ",[0,-10],"; }\n.",[1],"book { margin-bottom: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"book wx-image { width: ",[0,295],"; height: ",[0,185],"; margin-right: ",[0,34],"; }\n.",[1],"book .",[1],"intro { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"intro wx-text { font-size: ",[0,22],"; width: ",[0,350],"; color: #8692ab; }\n.",[1],"intro wx-text:nth-child(1) { font-size: ",[0,28],"; color: #000000; }\n.",[1],"intro wx-text:nth-child(3) { font-size: ",[0,28],"; }\n",],undefined,{path:"./pages/book/book.wxss"});    
__wxAppCode__['pages/book/book.wxml']=$gwx('./pages/book/book.wxml');

__wxAppCode__['pages/booklist/booklist.wxss']=setCssToHead([".",[1],"book { border: ",[0,1]," solid rgb(228, 228, 228); width: 93%; height: 25%; margin: ",[0,35]," auto; background: #fff; padding: ",[0,25]," 0 ",[0,25]," ",[0,19],"; -webkit-box-shadow: 0 0 ",[0,10]," ",[0,1]," rgba(0, 0, 0, 0.1); box-shadow: 0 0 ",[0,10]," ",[0,1]," rgba(0, 0, 0, 0.1); position: relative; }\n.",[1],"title { width: 60%; color: #282929; font-size: ",[0,35],"; margin: ",[0,45]," ",[0,312]," ",[0,35]," ",[0,25],"; }\n.",[1],"intro { width: 60%; font-size: ",[0,25],"; color: #828ea9; margin: 0 0 ",[0,24]," ",[0,24],"; }\nwx-image{ width: ",[0,250],"; height: 100%; position: absolute; top: 0; right: 0; }\n",],undefined,{path:"./pages/booklist/booklist.wxss"});    
__wxAppCode__['pages/booklist/booklist.wxml']=$gwx('./pages/booklist/booklist.wxml');

__wxAppCode__['pages/footprint/footprint.wxss']=setCssToHead([".",[1],"selectBox_list { color: #9fa8bd; -webkit-transform: translate(-100px, 100px); -ms-transform: translate(-100px, 100px); transform: translate(-100px, 100px); display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; height: ",[0,440],"; padding-top: ",[0,-180],"; margin: ",[0,-80]," ",[0,-85]," ",[0,-80]," ",[0,-80],"; }\n.",[1],"selectBox_listLi { padding-right: ",[0,-20],"; width: ",[0,140],"; }\n.",[1],"cont { padding: 0 ",[0,30],"; }\n.",[1],"title { font-size: ",[0,58],"; margin: ",[0,100]," ",[0,36]," ",[0,50]," 0; }\n.",[1],"info { height: ",[0,350],"; border: ",[0,1]," solid #e5e5e5; border-radius: ",[0,8],"; }\n.",[1],"info wx-image { width: ",[0,444],"; height: ",[0,124],"; }\n.",[1],"img { height: ",[0,146],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"tit { text-align: center; font-size: ",[0,38],"; margin-top: ",[0,70],"; margin-bottom: ",[0,40],"; font-weight: 600; }\n.",[1],"tit\x3ewx-text { color: #5c8ae6; font-size: ",[0,46],"; }\n.",[1],"tit\x3ewx-text::after { content: \x27\x27; margin-right: ",[0,18],"; }\n.",[1],"tit\x3ewx-text::before { content: \x27\x27; margin-left: ",[0,18],"; }\n.",[1],"tips-cont { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #425072; font-size: ",[0,24],"; }\n.",[1],"tips-cont wx-text { position: relative; margin: 0 ",[0,14],"; }\n.",[1],"tips-cont wx-text::after { content: \x27\x27; width: ",[0,8],"; height: ",[0,8],"; border-radius: 50%; background: #e2e3e6; margin: ",[0,14],"; position: absolute; top: 50%; right: ",[0,-30],"; margin-top: ",[0,-4],"; }\n.",[1],"tips-cont wx-text:last-child::after { height: 0; }\n.",[1],"list-tit { border-top: ",[0,6]," solid #f5f6f7; line-height: ",[0,130],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-top: ",[0,60],"; }\n.",[1],"book { margin-bottom: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"book wx-image { width: ",[0,230],"; height: ",[0,150],"; margin-right: ",[0,34],"; }\n.",[1],"book .",[1],"intro { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"fs-26 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"list-tit .",[1],"iconfont { margin-right: ",[0,15],"; }\n.",[1],"book .",[1],"intro .",[1],"icon-dui { margin-right: ",[0,10],"; }\n.",[1],"iconread { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n",],undefined,{path:"./pages/footprint/footprint.wxss"});    
__wxAppCode__['pages/footprint/footprint.wxml']=$gwx('./pages/footprint/footprint.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"clearfix::after{ content: \x27\x27; display: block; clear: both; }\n.",[1],"content{ border: ",[0,1]," solid red; }\n.",[1],"head{ border: ",[0,1]," solid red; }\n.",[1],"head \x3e wx-text{ margin: ",[0,45]," ",[0,38],"; font-size: ",[0,24],"; float: right; }\n.",[1],"main{ border: ",[0,1]," solid blue; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"main wx-text:nth-child(1){ font-size: ",[0,90],"; margin-top: ",[0,70],"; margin-bottom: ",[0,45],"; }\n.",[1],"main wx-text:nth-child(2){ font-size: ",[0,35],"; margin-bottom: ",[0,45],"; }\n.",[1],"enter1{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; border: ",[0,1]," solid red; margin: ",[0,56]," 0; }\n.",[1],"enter1 \x3e wx-button{ width: ",[0,500],"; margin-bottom: ",[0,56],"; border-radius: ",[0,10],"; }\n.",[1],"enter2{ border: ",[0,1]," solid blue; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"enter2 \x3e wx-button{ font-size: ",[0,22],"; margin: 0 ",[0,70],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/my/booklist-collect.wxss']=setCssToHead([".",[1],"booklist-collect { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 100vh; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-image { width: ",[0,480],"; height: ",[0,480],"; }\n.",[1],"booklist-collect wx-text { color: #a1aabd; }\n",],undefined,{path:"./pages/my/booklist-collect.wxss"});    
__wxAppCode__['pages/my/booklist-collect.wxml']=$gwx('./pages/my/booklist-collect.wxml');

__wxAppCode__['pages/my/books-collect.wxss']=setCssToHead([".",[1],"books-collect { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 100vh; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-image { width: ",[0,480],"; height: ",[0,480],"; }\n.",[1],"books-collect wx-text { color: #a1aabd; }\n",],undefined,{path:"./pages/my/books-collect.wxss"});    
__wxAppCode__['pages/my/books-collect.wxml']=$gwx('./pages/my/books-collect.wxml');

__wxAppCode__['pages/my/commend.wxss']=setCssToHead([".",[1],"pic{ background-image: url(../../static/img/share_app_img_bottom.b7310c59.png-do-not-use-local-path-./pages/my/commend.wxss\x263\x2619); width: ",[0,750],"; height: ",[0,1084],"; background-size:cover; }\n",],undefined,{path:"./pages/my/commend.wxss"});    
__wxAppCode__['pages/my/commend.wxml']=$gwx('./pages/my/commend.wxml');

__wxAppCode__['pages/my/download.wxss']=setCssToHead([".",[1],"download { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 100vh; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-image { width: ",[0,480],"; height: ",[0,480],"; }\n.",[1],"download wx-text{ color: #a1aabd; }\n",],undefined,{path:"./pages/my/download.wxss"});    
__wxAppCode__['pages/my/download.wxml']=$gwx('./pages/my/download.wxml');

__wxAppCode__['pages/my/my.wxss']=setCssToHead([".",[1],"my { font-family: \x27\\9ED1\\5B8B\x27; margin: auto ",[0,42],"; position: relative; }\n.",[1],"info { padding: ",[0,95]," 0 ",[0,45]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"info wx-text:nth-child(1) { font-weight: 500; font-size: ",[0,46],"; }\n.",[1],"info wx-text:nth-child(2) { font-weight: 500; font-size: ",[0,36],"; }\n.",[1],"name { width: 100px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\nwx-image { width: ",[0,142],"; height: ",[0,142],"; border-radius: 50%; position: absolute; right: 0; }\n.",[1],"intro { border-bottom: ",[0,1]," solid #f5f6f7; padding: ",[0,62]," 0 ",[0,62]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"iconfont { color: #8d98af; }\n",],undefined,{path:"./pages/my/my.wxss"});    
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/my/sentence-collect.wxss']=setCssToHead([".",[1],"collect { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 100vh; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-image { width: ",[0,480],"; height: ",[0,480],"; }\n.",[1],"collect wx-text{ color: #a1aabd; }\n",],undefined,{path:"./pages/my/sentence-collect.wxss"});    
__wxAppCode__['pages/my/sentence-collect.wxml']=$gwx('./pages/my/sentence-collect.wxml');

__wxAppCode__['pages/read/detail.wxss']=setCssToHead(["wx-swiper { height: ",[0,1100],"; }\n.",[1],"iconfont { font-size: ",[0,42],"; }\n.",[1],"detail { margin: 0 ",[0,35],"; font: ",[0,28],"/1.5; }\n.",[1],"title, .",[1],"scrap { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title wx-text:nth-child(1) { margin-top: ",[0,85],"; margin-bottom: ",[0,50],"; font-size: ",[0,55],"; }\n.",[1],"scrap wx-text:nth-child(1) { font-weight: bold; margin-top: ",[0,80],"; margin-bottom: ",[0,42],"; }\n.",[1],"footer { width: 100%; border: ",[0,1]," solid #fff; -webkit-box-shadow: ",[0,1]," ",[0,1]," ",[0,1]," grey; box-shadow: ",[0,1]," ",[0,1]," ",[0,1]," grey; position: fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; left: ",[0,-2],"; background: #ffffff; }\n.",[1],"download, .",[1],"collect { font-size: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-left: ",[0,45],"; margin-right: ",[0,5],"; margin-top: ",[0,20],"; }\n.",[1],"download\x3ewx-view, .",[1],"collect\x3ewx-view { margin: ",[0,5]," 0; }\n.",[1],"footer\x3ewx-button { width: ",[0,218],"; margin: ",[0,20]," 0 ",[0,20]," ",[0,40],"; }\n",],undefined,{path:"./pages/read/detail.wxss"});    
__wxAppCode__['pages/read/detail.wxml']=$gwx('./pages/read/detail.wxml');

__wxAppCode__['pages/read/read.wxss']=setCssToHead(["wx-swiper { height: ",[0,980],"; width: 100%; }\n.",[1],"main { margin: ",[0,30],"; }\n.",[1],"header { font-size: ",[0,62],"; margin: ",[0,100]," ",[0,36]," ",[0,50]," ",[0,36],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"iconfont { font-size: ",[0,60],"; }\n.",[1],"main { color: #fff; background-size: cover; width: 90%; border: ",[0,1]," solid black; border-radius: ",[0,20],"; height: ",[0,920],"; margin-top: ",[0,45],"; position: relative; }\n.",[1],"main\x3ewx-text { margin: ",[0,24]," 0 0 ",[0,38],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"main\x3ewx-text:nth-child(1) { margin-top: ",[0,65],"; }\n.",[1],"main\x3ewx-text:nth-child(2) { margin-top: ",[0,20],"; }\n.",[1],"main\x3ewx-text:nth-child(3) { margin-top: ",[0,44],"; }\n.",[1],"main\x3ewx-text:nth-child(4) { margin-top: ",[0,28],"; }\n.",[1],"read { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,42]," 0 0; position: absolute; right: 0; bottom: ",[0,42],"; }\n.",[1],"icon-listen { border: ",[0,16]," solid #000000; border-radius: 50%; font-size: ",[0,40],"; width: ",[0,40],"; height: ",[0,40],"; margin-right: ",[0,25],"; color: #fff; background: #000000; }\n.",[1],"once { border: ",[0,20]," solid #050504; border-radius: ",[0,35],"; background: #050504; color: #fff; }\n",],undefined,{path:"./pages/read/read.wxss"});    
__wxAppCode__['pages/read/read.wxml']=$gwx('./pages/read/read.wxml');

__wxAppCode__['pages/read/readstory.wxss']=setCssToHead(["wx-swiper { height: ",[0,3000],"; }\n.",[1],"main { word-wrap: break-word; margin: ",[0,262]," ",[0,60]," 0 ",[0,40],"; }\n.",[1],"title { font-size: ",[0,55],"; margin-bottom: ",[0,80],"; }\n.",[1],"info { line-height: ",[0,70],"; }\n",],undefined,{path:"./pages/read/readstory.wxss"});    
__wxAppCode__['pages/read/readstory.wxml']=$gwx('./pages/read/readstory.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
