/*! highlight.js v9.15.8 | BSD3 License | git.io/hljslicense */ ! function (e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
        return n.hljs
    }))
}(function (a) {
    var f = [],
        u = Object.keys,
        N = {},
        c = {},
        n = /^(no-?highlight|plain|text)$/i,
        s = /\blang(?:uage)?-([\w-]+)\b/i,
        t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        r = {
            case_insensitive: "cI",
            lexemes: "l",
            contains: "c",
            keywords: "k",
            subLanguage: "sL",
            className: "cN",
            begin: "b",
            beginKeywords: "bK",
            end: "e",
            endsWithParent: "eW",
            illegal: "i",
            excludeBegin: "eB",
            excludeEnd: "eE",
            returnBegin: "rB",
            returnEnd: "rE",
            relevance: "r",
            variants: "v",
            IDENT_RE: "IR",
            UNDERSCORE_IDENT_RE: "UIR",
            NUMBER_RE: "NR",
            C_NUMBER_RE: "CNR",
            BINARY_NUMBER_RE: "BNR",
            RE_STARTERS_RE: "RSR",
            BACKSLASH_ESCAPE: "BE",
            APOS_STRING_MODE: "ASM",
            QUOTE_STRING_MODE: "QSM",
            PHRASAL_WORDS_MODE: "PWM",
            C_LINE_COMMENT_MODE: "CLCM",
            C_BLOCK_COMMENT_MODE: "CBCM",
            HASH_COMMENT_MODE: "HCM",
            NUMBER_MODE: "NM",
            C_NUMBER_MODE: "CNM",
            BINARY_NUMBER_MODE: "BNM",
            CSS_NUMBER_MODE: "CSSNM",
            REGEXP_MODE: "RM",
            TITLE_MODE: "TM",
            UNDERSCORE_TITLE_MODE: "UTM",
            COMMENT: "C",
            beginRe: "bR",
            endRe: "eR",
            illegalRe: "iR",
            lexemesRe: "lR",
            terminators: "t",
            terminator_end: "tE"
        },
        b = "</span>",
        h = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        };

    function _(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function E(e) {
        return e.nodeName.toLowerCase()
    }

    function v(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index
    }

    function l(e) {
        return n.test(e)
    }

    function g(e) {
        var n, t = {},
            r = Array.prototype.slice.call(arguments, 1);
        for (n in e) t[n] = e[n];
        return r.forEach(function (e) {
            for (n in e) t[n] = e[n]
        }), t
    }

    function R(e) {
        var a = [];
        return function e(n, t) {
            for (var r = n.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? t += r.nodeValue.length : 1 === r.nodeType && (a.push({
                event: "start",
                offset: t,
                node: r
            }), t = e(r, t), E(r).match(/br|hr|img|input/) || a.push({
                event: "stop",
                offset: t,
                node: r
            }));
            return t
        }(e, 0), a
    }

    function i(e) {
        if (r && !e.langApiRestored) {
            for (var n in e.langApiRestored = !0, r) e[n] && (e[r[n]] = e[n]);
            (e.c || []).concat(e.v || []).forEach(i)
        }
    }

    function m(o) {
        function s(e) {
            return e && e.source || e
        }

        function c(e, n) {
            return new RegExp(s(e), "m" + (o.cI ? "i" : "") + (n ? "g" : ""))
        }! function n(t, e) {
            if (!t.compiled) {
                if (t.compiled = !0, t.k = t.k || t.bK, t.k) {
                    function r(t, e) {
                        o.cI && (e = e.toLowerCase()), e.split(" ").forEach(function (e) {
                            var n = e.split("|");
                            a[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                        })
                    }
                    var a = {};
                    "string" == typeof t.k ? r("keyword", t.k) : u(t.k).forEach(function (e) {
                        r(e, t.k[e])
                    }), t.k = a
                }
                t.lR = c(t.l || /\w+/, !0), e && (t.bK && (t.b = "\\b(" + t.bK.split(" ").join("|") + ")\\b"), t.b || (t.b = /\B|\b/), t.bR = c(t.b), t.endSameAsBegin && (t.e = t.b), t.e || t.eW || (t.e = /\B|\b/), t.e && (t.eR = c(t.e)), t.tE = s(t.e) || "", t.eW && e.tE && (t.tE += (t.e ? "|" : "") + e.tE)), t.i && (t.iR = c(t.i)), null == t.r && (t.r = 1), t.c || (t.c = []), t.c = Array.prototype.concat.apply([], t.c.map(function (e) {
                    return function (n) {
                        return n.v && !n.cached_variants && (n.cached_variants = n.v.map(function (e) {
                            return g(n, {
                                v: null
                            }, e)
                        })), n.cached_variants || n.eW && [g(n)] || [n]
                    }("self" === e ? t : e)
                })), t.c.forEach(function (e) {
                    n(e, t)
                }), t.starts && n(t.starts, e);
                var i = t.c.map(function (e) {
                    return e.bK ? "\\.?(?:" + e.b + ")\\.?" : e.b
                }).concat([t.tE, t.i]).map(s).filter(Boolean);
                t.t = i.length ? c(function (e, n) {
                    for (var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, r = 0, a = "", i = 0; i < e.length; i++) {
                        var o = r,
                            c = s(e[i]);
                        for (0 < i && (a += n); 0 < c.length;) {
                            var u = t.exec(c);
                            if (null == u) {
                                a += c;
                                break
                            }
                            a += c.substring(0, u.index), c = c.substring(u.index + u[0].length), "\\" == u[0][0] && u[1] ? a += "\\" + String(Number(u[1]) + o) : (a += u[0], "(" == u[0] && r++)
                        }
                    }
                    return a
                }(i, "|"), !0) : {
                    exec: function () {
                        return null
                    }
                }
            }
        }(o)
    }

    function C(e, n, i, t) {
        function c(e, n, t, r) {
            var a = '<span class="' + (r ? "" : h.classPrefix);
            return e ? (a += e + '">') + n + (t ? "" : b) : n
        }

        function o() {
            E += null != l.sL ? function () {
                var e = "string" == typeof l.sL;
                if (e && !N[l.sL]) return _(g);
                var n = e ? C(l.sL, g, !0, f[l.sL]) : O(g, l.sL.length ? l.sL : void 0);
                return 0 < l.r && (R += n.r), e && (f[l.sL] = n.top), c(n.language, n.value, !1, !0)
            }() : function () {
                var e, n, t, r, a, i, o;
                if (!l.k) return _(g);
                for (r = "", n = 0, l.lR.lastIndex = 0, t = l.lR.exec(g); t;) r += _(g.substring(n, t.index)), a = l, i = t, void 0, o = s.cI ? i[0].toLowerCase() : i[0], (e = a.k.hasOwnProperty(o) && a.k[o]) ? (R += e[1], r += c(e[0], _(t[0]))) : r += _(t[0]), n = l.lR.lastIndex, t = l.lR.exec(g);
                return r + _(g.substr(n))
            }(), g = ""
        }

        function u(e) {
            E += e.cN ? c(e.cN, "", !0) : "", l = Object.create(e, {
                parent: {
                    value: l
                }
            })
        }

        function r(e, n) {
            if (g += e, null == n) return o(), 0;
            var t = function (e, n) {
                var t, r, a;
                for (t = 0, r = n.c.length; t < r; t++)
                    if (v(n.c[t].bR, e)) return n.c[t].endSameAsBegin && (n.c[t].eR = (a = n.c[t].bR.exec(e)[0], new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m"))), n.c[t]
            }(n, l);
            if (t) return t.skip ? g += n : (t.eB && (g += n), o(), t.rB || t.eB || (g = n)), u(t), t.rB ? 0 : n.length;
            var r = function e(n, t) {
                if (v(n.eR, t)) {
                    for (; n.endsParent && n.parent;) n = n.parent;
                    return n
                }
                if (n.eW) return e(n.parent, t)
            }(l, n);
            if (r) {
                var a = l;
                for (a.skip ? g += n : (a.rE || a.eE || (g += n), o(), a.eE && (g = n)); l.cN && (E += b), l.skip || l.sL || (R += l.r), (l = l.parent) !== r.parent;);
                return r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), u(r.starts)), a.rE ? 0 : n.length
            }
            if (function (e, n) {
                    return !i && v(n.iR, e)
                }(n, l)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (l.cN || "<unnamed>") + '"');
            return g += n, n.length || 1
        }
        var s = B(e);
        if (!s) throw new Error('Unknown language: "' + e + '"');
        m(s);
        var a, l = t || s,
            f = {},
            E = "";
        for (a = l; a !== s; a = a.parent) a.cN && (E = c(a.cN, "", !0) + E);
        var g = "",
            R = 0;
        try {
            for (var d, p, M = 0; l.t.lastIndex = M, d = l.t.exec(n);) p = r(n.substring(M, d.index), d[0]), M = d.index + p;
            for (r(n.substr(M)), a = l; a.parent; a = a.parent) a.cN && (E += b);
            return {
                r: R,
                value: E,
                language: e,
                top: l
            }
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                r: 0,
                value: _(n)
            };
            throw e
        }
    }

    function O(t, e) {
        e = e || h.languages || u(N);
        var r = {
                r: 0,
                value: _(t)
            },
            a = r;
        return e.filter(B).filter(M).forEach(function (e) {
            var n = C(e, t, !1);
            n.language = e, n.r > a.r && (a = n), n.r > r.r && (a = r, r = n)
        }), a.language && (r.second_best = a), r
    }

    function d(e) {
        return h.tabReplace || h.useBR ? e.replace(t, function (e, n) {
            return h.useBR && "\n" === e ? "<br>" : h.tabReplace ? n.replace(/\t/g, h.tabReplace) : ""
        }) : e
    }

    function o(e) {
        var n, t, r, a, i, o = function (e) {
            var n, t, r, a, i = e.className + " ";
            if (i += e.parentNode ? e.parentNode.className : "", t = s.exec(i)) return B(t[1]) ? t[1] : "no-highlight";
            for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
                if (l(a = i[n]) || B(a)) return a
        }(e);
        l(o) || (h.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, i = n.textContent, r = o ? C(o, i, !0) : O(i), (t = R(n)).length && ((a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = r.value, r.value = function (e, n, t) {
            var r = 0,
                a = "",
                i = [];

            function o() {
                return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
            }

            function c(e) {
                a += "<" + E(e) + f.map.call(e.attributes, function (e) {
                    return " " + e.nodeName + '="' + _(e.value).replace('"', "&quot;") + '"'
                }).join("") + ">"
            }

            function u(e) {
                a += "</" + E(e) + ">"
            }

            function s(e) {
                ("start" === e.event ? c : u)(e.node)
            }
            for (; e.length || n.length;) {
                var l = o();
                if (a += _(t.substring(r, l[0].offset)), r = l[0].offset, l === e) {
                    for (i.reverse().forEach(u); s(l.splice(0, 1)[0]), (l = o()) === e && l.length && l[0].offset === r;);
                    i.reverse().forEach(c)
                } else "start" === l[0].event ? i.push(l[0].node) : i.pop(), s(l.splice(0, 1)[0])
            }
            return a + _(t.substr(r))
        }(t, R(a), i)), r.value = d(r.value), e.innerHTML = r.value, e.className = function (e, n, t) {
            var r = n ? c[n] : t,
                a = [e.trim()];
            return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
        }(e.className, o, r.language), e.result = {
            language: r.language,
            re: r.r
        }, r.second_best && (e.second_best = {
            language: r.second_best.language,
            re: r.second_best.r
        }))
    }

    function p() {
        if (!p.called) {
            p.called = !0;
            var e = document.querySelectorAll("pre code");
            f.forEach.call(e, o)
        }
    }

    function B(e) {
        return e = (e || "").toLowerCase(), N[e] || N[c[e]]
    }

    function M(e) {
        var n = B(e);
        return n && !n.disableAutodetect
    }
    return a.highlight = C, a.highlightAuto = O, a.fixMarkup = d, a.highlightBlock = o, a.configure = function (e) {
        h = g(h, e)
    }, a.initHighlighting = p, a.initHighlightingOnLoad = function () {
        addEventListener("DOMContentLoaded", p, !1), addEventListener("load", p, !1)
    }, a.registerLanguage = function (n, e) {
        var t = N[n] = e(a);
        i(t), t.aliases && t.aliases.forEach(function (e) {
            c[e] = n
        })
    }, a.listLanguages = function () {
        return u(N)
    }, a.getLanguage = B, a.autoDetection = M, a.inherit = g, a.IR = a.IDENT_RE = "[a-zA-Z]\\w*", a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?", a.CNR = a.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)", a.RSR = a.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a.BE = a.BACKSLASH_ESCAPE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, a.ASM = a.APOS_STRING_MODE = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [a.BE]
    }, a.QSM = a.QUOTE_STRING_MODE = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [a.BE]
    }, a.PWM = a.PHRASAL_WORDS_MODE = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    }, a.C = a.COMMENT = function (e, n, t) {
        var r = a.inherit({
            cN: "comment",
            b: e,
            e: n,
            c: []
        }, t || {});
        return r.c.push(a.PWM), r.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), r
    }, a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$"), a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/"), a.HCM = a.HASH_COMMENT_MODE = a.C("#", "$"), a.NM = a.NUMBER_MODE = {
        cN: "number",
        b: a.NR,
        r: 0
    }, a.CNM = a.C_NUMBER_MODE = {
        cN: "number",
        b: a.CNR,
        r: 0
    }, a.BNM = a.BINARY_NUMBER_MODE = {
        cN: "number",
        b: a.BNR,
        r: 0
    }, a.CSSNM = a.CSS_NUMBER_MODE = {
        cN: "number",
        b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, a.RM = a.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [a.BE]
        }]
    }, a.TM = a.TITLE_MODE = {
        cN: "title",
        b: a.IR,
        r: 0
    }, a.UTM = a.UNDERSCORE_TITLE_MODE = {
        cN: "title",
        b: a.UIR,
        r: 0
    }, a.METHOD_GUARD = {
        b: "\\.\\s*" + a.UIR,
        r: 0
    }, a
});
hljs.registerLanguage("json", function (e) {
    var i = {
            literal: "true false null"
        },
        n = [e.QSM, e.CNM],
        r = {
            e: ",",
            eW: !0,
            eE: !0,
            c: n,
            k: i
        },
        t = {
            b: "{",
            e: "}",
            c: [{
                cN: "attr",
                b: /"/,
                e: /"/,
                c: [e.BE],
                i: "\\n"
            }, e.inherit(r, {
                b: /:/
            })],
            i: "\\S"
        },
        c = {
            b: "\\[",
            e: "\\]",
            c: [e.inherit(r)],
            i: "\\S"
        };
    return n.splice(n.length, 0, t, c), {
        c: n,
        k: i,
        i: "\\S"
    }
});
hljs.registerLanguage("sql", function (e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>{}*]/,
        c: [{
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
            e: /;/,
            eW: !0,
            l: /[\w\.]+/,
            k: {
                keyword: "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal: "true false null unknown",
                built_in: "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varying void"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            }, e.CNM, e.CBCM, t, e.HCM]
        }, e.CBCM, t, e.HCM]
    }
});
hljs.registerLanguage("javascript", function (e) {
    var r = "[A-Za-z$_][0-9A-Za-z$_]*",
        a = {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        t = {
            cN: "number",
            v: [{
                b: "\\b(0[bB][01]+)"
            }, {
                b: "\\b(0[oO][0-7]+)"
            }, {
                b: e.CNR
            }],
            r: 0
        },
        n = {
            cN: "subst",
            b: "\\$\\{",
            e: "\\}",
            k: a,
            c: []
        },
        c = {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, n]
        };
    n.c = [e.ASM, e.QSM, c, t, e.RM];
    var s = n.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ["js", "jsx"],
        k: a,
        c: [{
            cN: "meta",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, t, {
            b: /[{,]\s*/,
            r: 0,
            c: [{
                b: r + "\\s*:",
                rB: !0,
                r: 0,
                c: [{
                    cN: "attr",
                    b: r,
                    r: 0
                }]
            }]
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                cN: "function",
                b: "(\\(.*?\\)|" + r + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [{
                    cN: "params",
                    v: [{
                        b: r
                    }, {
                        b: /\(\s*\)/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        eB: !0,
                        eE: !0,
                        k: a,
                        c: s
                    }]
                }]
            }, {
                cN: "",
                b: /\s/,
                e: /\s*/,
                skip: !0
            }, {
                b: /</,
                e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                sL: "xml",
                c: [{
                    b: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                    skip: !0
                }, {
                    b: /<[A-Za-z0-9\\._:-]+/,
                    e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                    skip: !0,
                    c: [{
                        b: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                        skip: !0
                    }, "self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: r
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: s
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }, {
            bK: "constructor get set",
            e: /\{/,
            eE: !0
        }],
        i: /#(?!!)/
    }
});
hljs.registerLanguage("xml", function (s) {
    var e = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{
            cN: "attr",
            b: "[A-Za-z0-9\\._:-]+",
            r: 0
        }, {
            b: /=\s*/,
            r: 0,
            c: [{
                cN: "string",
                endsParent: !0,
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s"'=<>`]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, s.C("\x3c!--", "--\x3e", {
            r: 10
        }), {
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "meta",
            b: /<\?xml/,
            e: /\?>/,
            r: 10
        }, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{
                b: "/\\*",
                e: "\\*/",
                skip: !0
            }, {
                b: 'b"',
                e: '"',
                skip: !0
            }, {
                b: "b'",
                e: "'",
                skip: !0
            }, s.inherit(s.ASM, {
                i: null,
                cN: null,
                c: null,
                skip: !0
            }), s.inherit(s.QSM, {
                i: null,
                cN: null,
                c: null,
                skip: !0
            })]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                name: "style"
            },
            c: [e],
            starts: {
                e: "</style>",
                rE: !0,
                sL: ["css", "xml"]
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                name: "script"
            },
            c: [e],
            starts: {
                e: "<\/script>",
                rE: !0,
                sL: ["actionscript", "javascript", "handlebars", "xml"]
            }
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "name",
                b: /[^\/><\s]+/,
                r: 0
            }, e]
        }]
    }
});
hljs.registerLanguage("django", function (e) {
    var t = {
        b: /\|[A-Za-z]+:?/,
        k: {
            name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
        },
        c: [e.QSM, e.ASM]
    };
    return {
        aliases: ["jinja"],
        cI: !0,
        sL: "xml",
        c: [e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.C(/\{#/, /#}/), {
            cN: "template-tag",
            b: /\{%/,
            e: /%}/,
            c: [{
                cN: "name",
                b: /\w+/,
                k: {
                    name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
                },
                starts: {
                    eW: !0,
                    k: "in by as",
                    c: [t],
                    r: 0
                }
            }]
        }, {
            cN: "template-variable",
            b: /\{\{/,
            e: /}}/,
            c: [t]
        }]
    }
});
hljs.registerLanguage("scss", function (e) {
    var t = {
            cN: "variable",
            b: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
        },
        i = {
            cN: "number",
            b: "#[0-9A-Fa-f]+"
        };
    e.CSSNM, e.QSM, e.ASM, e.CBCM;
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, {
            cN: "selector-id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "selector-class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "selector-attr",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "selector-tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        }, {
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        }, t, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
            b: ":",
            e: ";",
            c: [t, i, e.CSSNM, e.QSM, e.ASM, {
                cN: "meta",
                b: "!important"
            }]
        }, {
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [t, e.QSM, e.ASM, i, e.CSSNM, {
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            }]
        }]
    }
});
hljs.registerLanguage("python", function (e) {
    var r = {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
            built_in: "Ellipsis NotImplemented",
            literal: "False None True"
        },
        b = {
            cN: "meta",
            b: /^(>>>|\.\.\.) /
        },
        c = {
            cN: "subst",
            b: /\{/,
            e: /\}/,
            k: r,
            i: /#/
        },
        a = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: /(u|b)?r?'''/,
                e: /'''/,
                c: [e.BE, b],
                r: 10
            }, {
                b: /(u|b)?r?"""/,
                e: /"""/,
                c: [e.BE, b],
                r: 10
            }, {
                b: /(fr|rf|f)'''/,
                e: /'''/,
                c: [e.BE, b, c]
            }, {
                b: /(fr|rf|f)"""/,
                e: /"""/,
                c: [e.BE, b, c]
            }, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {
                b: /(u|r|ur)"/,
                e: /"/,
                r: 10
            }, {
                b: /(b|br)'/,
                e: /'/
            }, {
                b: /(b|br)"/,
                e: /"/
            }, {
                b: /(fr|rf|f)'/,
                e: /'/,
                c: [e.BE, c]
            }, {
                b: /(fr|rf|f)"/,
                e: /"/,
                c: [e.BE, c]
            }, e.ASM, e.QSM]
        },
        i = {
            cN: "number",
            r: 0,
            v: [{
                b: e.BNR + "[lLjJ]?"
            }, {
                b: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                b: e.CNR + "[lLjJ]?"
            }]
        },
        l = {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: ["self", b, i, a]
        };
    return c.c = [a, i, b], {
        aliases: ["py", "gyp", "ipython"],
        k: r,
        i: /(<\/|->|\?)|=>/,
        c: [b, i, a, e.HCM, {
            v: [{
                cN: "function",
                bK: "def"
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, l, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        }, {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("markdown", function (e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "section",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^\\s*([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "quote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "^```w*s*$",
                e: "^```s*$"
            }, {
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "string",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "symbol",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [{
                cN: "symbol",
                b: /\[/,
                e: /\]/,
                eB: !0,
                eE: !0
            }, {
                cN: "link",
                b: /:\s*/,
                e: /$/,
                eB: !0
            }]
        }]
    }
});
hljs.registerLanguage("http", function (e) {
    var t = "HTTP/[0-9\\.]+";
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            b: "^" + t,
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }, {
                b: t
            }, {
                cN: "keyword",
                b: "[A-Z]+"
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                e: "$",
                r: 0
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: [],
                eW: !0
            }
        }]
    }
});
hljs.registerLanguage("bash", function (e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)}/
            }]
        },
        s = {
            cN: "string",
            b: /"/,
            e: /"/,
            c: [e.BE, t, {
                cN: "variable",
                b: /\$\(/,
                e: /\)/,
                c: [e.BE]
            }]
        };
    return {
        aliases: ["sh", "zsh"],
        l: /\b-?[a-z\._]+\b/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "meta",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, s, {
            cN: "string",
            b: /'/,
            e: /'/
        }, t]
    }
});
hljs.registerLanguage("nginx", function (e) {
    var r = {
            cN: "variable",
            v: [{
                b: /\$\d+/
            }, {
                b: /\$\{/,
                e: /}/
            }, {
                b: "[\\$\\@]" + e.UIR
            }]
        },
        b = {
            eW: !0,
            l: "[a-z/_]+",
            k: {
                literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
            },
            r: 0,
            i: "=>",
            c: [e.HCM, {
                cN: "string",
                c: [e.BE, r],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }]
            }, {
                b: "([a-z]+):/",
                e: "\\s",
                eW: !0,
                eE: !0,
                c: [r]
            }, {
                cN: "regexp",
                c: [e.BE, r],
                v: [{
                    b: "\\s\\^",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "~\\*?\\s+",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "\\*(\\.[a-z\\-]+)+"
                }, {
                    b: "([a-z\\-]+\\.)+\\*"
                }]
            }, {
                cN: "number",
                b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                cN: "number",
                b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                r: 0
            }, r]
        };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {
            b: e.UIR + "\\s+{",
            rB: !0,
            e: "{",
            c: [{
                cN: "section",
                b: e.UIR
            }],
            r: 0
        }, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "attribute",
                b: e.UIR,
                starts: b
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
});
hljs.registerLanguage("css", function (e) {
    var c = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{
                        cN: "built_in",
                        b: /[\w-]+/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        c: [e.ASM, e.QSM]
                    }]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "number",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "meta",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {
            cN: "selector-id",
            b: /#[A-Za-z0-9_-]+/
        }, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{
                cN: "keyword",
                b: /\w+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "selector-tag",
            b: "[a-zA-Z-][a-zA-Z0-9_-]*",
            r: 0
        }, {
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, c]
        }]
    }
});