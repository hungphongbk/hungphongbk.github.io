// Generated from BKOOL.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BKOOLListener = require('./BKOOLListener').BKOOLListener;
var grammarFileName = "BKOOL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003?\u016c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0003",
    "\u0002\u0006\u0002X\n\u0002\r\u0002\u000e\u0002Y\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003b\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003f\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0006\u0004l\n\u0004\r\u0004\u000e\u0004m\u0003",
    "\u0005\u0005\u0005q\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006w\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007~\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u008d\n\n\f\n\u000e\n\u0090\u000b\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u0095\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u009b\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00a0\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00a5\n\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00aa",
    "\n\f\f\f\u000e\f\u00ad\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u00b3\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00c0\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00c7\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00cc\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u00d1\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u00d6\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u00db\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u00e0\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00e5",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00ea\n\u001a",
    "\u0003\u001b\u0003\u001b\u0005\u001b\u00ee\n\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0007\u001c\u00f3\n\u001c\f\u001c\u000e\u001c\u00f6",
    "\u000b\u001c\u0003\u001d\u0003\u001d\u0005\u001d\u00fa\n\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0100\n\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u0104\n\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0111\n\u001f",
    "\u0003\u001f\u0003\u001f\u0007\u001f\u0115\n\u001f\f\u001f\u000e\u001f",
    "\u0118\u000b\u001f\u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!",
    "\u0003!\u0005!\u0122\n!\u0003!\u0005!\u0125\n!\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u012f\n\"\u0003#",
    "\u0003#\u0006#\u0133\n#\r#\u000e#\u0134\u0005#\u0137\n#\u0003#\u0007",
    "#\u013a\n#\f#\u000e#\u013d\u000b#\u0003#\u0003#\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0005$\u0147\n$\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u015d\n\'\u0003",
    "(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003",
    "+\u0003+\u0003+\u0003+\u0002\u0002,\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN",
    "PRT\u0002\b\u0003\u0002\b\u000b\u0003\u0002\u000f\u0012\u0003\u0002",
    "\u0013\u0014\u0003\u0002\u0015\u0016\u0003\u0002\u0017\u0018\u0003\u0002",
    "\u0019\u001c\u0179\u0002W\u0003\u0002\u0002\u0002\u0004]\u0003\u0002",
    "\u0002\u0002\u0006k\u0003\u0002\u0002\u0002\bp\u0003\u0002\u0002\u0002",
    "\nv\u0003\u0002\u0002\u0002\f}\u0003\u0002\u0002\u0002\u000e\u007f\u0003",
    "\u0002\u0002\u0002\u0010\u0085\u0003\u0002\u0002\u0002\u0012\u0089\u0003",
    "\u0002\u0002\u0002\u0014\u00a4\u0003\u0002\u0002\u0002\u0016\u00a6\u0003",
    "\u0002\u0002\u0002\u0018\u00b2\u0003\u0002\u0002\u0002\u001a\u00b4\u0003",
    "\u0002\u0002\u0002\u001c\u00b6\u0003\u0002\u0002\u0002\u001e\u00b8\u0003",
    "\u0002\u0002\u0002 \u00bf\u0003\u0002\u0002\u0002\"\u00c1\u0003\u0002",
    "\u0002\u0002$\u00c3\u0003\u0002\u0002\u0002&\u00c8\u0003\u0002\u0002",
    "\u0002(\u00cd\u0003\u0002\u0002\u0002*\u00d2\u0003\u0002\u0002\u0002",
    ",\u00d7\u0003\u0002\u0002\u0002.\u00dc\u0003\u0002\u0002\u00020\u00e4",
    "\u0003\u0002\u0002\u00022\u00e9\u0003\u0002\u0002\u00024\u00eb\u0003",
    "\u0002\u0002\u00026\u00ef\u0003\u0002\u0002\u00028\u00f7\u0003\u0002",
    "\u0002\u0002:\u0103\u0003\u0002\u0002\u0002<\u0110\u0003\u0002\u0002",
    "\u0002>\u0119\u0003\u0002\u0002\u0002@\u011d\u0003\u0002\u0002\u0002",
    "B\u012e\u0003\u0002\u0002\u0002D\u0130\u0003\u0002\u0002\u0002F\u0140",
    "\u0003\u0002\u0002\u0002H\u0148\u0003\u0002\u0002\u0002J\u014d\u0003",
    "\u0002\u0002\u0002L\u015c\u0003\u0002\u0002\u0002N\u015e\u0003\u0002",
    "\u0002\u0002P\u0161\u0003\u0002\u0002\u0002R\u0164\u0003\u0002\u0002",
    "\u0002T\u0168\u0003\u0002\u0002\u0002VX\u0005\u0004\u0003\u0002WV\u0003",
    "\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0007\u0002",
    "\u0002\u0003\\\u0003\u0003\u0002\u0002\u0002]^\u0007\u0003\u0002\u0002",
    "^a\u00077\u0002\u0002_`\u0007\u0004\u0002\u0002`b\u00077\u0002\u0002",
    "a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002ce\u00078\u0002\u0002df\u0005\u0006\u0004\u0002ed\u0003\u0002",
    "\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0007",
    "9\u0002\u0002h\u0005\u0003\u0002\u0002\u0002il\u0005\b\u0005\u0002j",
    "l\u0005\u0014\u000b\u0002ki\u0003\u0002\u0002\u0002kj\u0003\u0002\u0002",
    "\u0002lm\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002",
    "\u0002\u0002n\u0007\u0003\u0002\u0002\u0002oq\u0007-\u0002\u0002po\u0003",
    "\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002",
    "rs\u0005\n\u0006\u0002s\t\u0003\u0002\u0002\u0002tw\u0005\u000e\b\u0002",
    "uw\u0005\u0010\t\u0002vt\u0003\u0002\u0002\u0002vu\u0003\u0002\u0002",
    "\u0002wx\u0003\u0002\u0002\u0002xy\u00071\u0002\u0002y\u000b\u0003\u0002",
    "\u0002\u0002z~\u0005\u001e\u0010\u0002{~\u0005\u001a\u000e\u0002|~\u0005",
    "\"\u0012\u0002}z\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}",
    "|\u0003\u0002\u0002\u0002~\r\u0003\u0002\u0002\u0002\u007f\u0080\u0007",
    ".\u0002\u0002\u0080\u0081\u0005\f\u0007\u0002\u0081\u0082\u00077\u0002",
    "\u0002\u0082\u0083\u0007\u0005\u0002\u0002\u0083\u0084\u0005$\u0013",
    "\u0002\u0084\u000f\u0003\u0002\u0002\u0002\u0085\u0086\u0005\u0012\n",
    "\u0002\u0086\u0087\u0007\u0006\u0002\u0002\u0087\u0088\u0005\f\u0007",
    "\u0002\u0088\u0011\u0003\u0002\u0002\u0002\u0089\u008e\u00077\u0002",
    "\u0002\u008a\u008b\u0007\u0007\u0002\u0002\u008b\u008d\u00077\u0002",
    "\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0013\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u00077\u0002\u0002\u0092\u0094\u0007:\u0002\u0002",
    "\u0093\u0095\u0005\u0016\f\u0002\u0094\u0093\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0007;\u0002\u0002\u0097\u00a5\u0005D#\u0002\u0098\u009a",
    "\u0005\u0018\r\u0002\u0099\u009b\u0007-\u0002\u0002\u009a\u0099\u0003",
    "\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009c\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u00077\u0002\u0002\u009d\u009f\u0007",
    ":\u0002\u0002\u009e\u00a0\u0005\u0016\f\u0002\u009f\u009e\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0007;\u0002\u0002\u00a2\u00a3\u0005D#\u0002",
    "\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4\u0091\u0003\u0002\u0002\u0002",
    "\u00a4\u0098\u0003\u0002\u0002\u0002\u00a5\u0015\u0003\u0002\u0002\u0002",
    "\u00a6\u00ab\u0005\u0010\t\u0002\u00a7\u00a8\u00071\u0002\u0002\u00a8",
    "\u00aa\u0005\u0010\t\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa",
    "\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0003\u0002\u0002\u0002\u00ac\u0017\u0003\u0002\u0002\u0002\u00ad",
    "\u00ab\u0003\u0002\u0002\u0002\u00ae\u00b3\u0005\u001a\u000e\u0002\u00af",
    "\u00b3\u0005\u001e\u0010\u0002\u00b0\u00b3\u0005\"\u0012\u0002\u00b1",
    "\u00b3\u0005\u001c\u000f\u0002\u00b2\u00ae\u0003\u0002\u0002\u0002\u00b2",
    "\u00af\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2",
    "\u00b1\u0003\u0002\u0002\u0002\u00b3\u0019\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\t\u0002\u0002\u0002\u00b5\u001b\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0007\f\u0002\u0002\u00b7\u001d\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0005 \u0011\u0002\u00b9\u00ba\u0007\r\u0002\u0002\u00ba\u00bb",
    "\u00075\u0002\u0002\u00bb\u00bc\u0007\u000e\u0002\u0002\u00bc\u001f",
    "\u0003\u0002\u0002\u0002\u00bd\u00c0\u0005\u001a\u000e\u0002\u00be\u00c0",
    "\u0005\"\u0012\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00be",
    "\u0003\u0002\u0002\u0002\u00c0!\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u00077\u0002\u0002\u00c2#\u0003\u0002\u0002\u0002\u00c3\u00c6\u0005",
    "&\u0014\u0002\u00c4\u00c5\t\u0003\u0002\u0002\u00c5\u00c7\u0005$\u0013",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002",
    "\u0002\u00c7%\u0003\u0002\u0002\u0002\u00c8\u00cb\u0005(\u0015\u0002",
    "\u00c9\u00ca\t\u0004\u0002\u0002\u00ca\u00cc\u0005$\u0013\u0002\u00cb",
    "\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc",
    "\'\u0003\u0002\u0002\u0002\u00cd\u00d0\u0005*\u0016\u0002\u00ce\u00cf",
    "\t\u0005\u0002\u0002\u00cf\u00d1\u0005$\u0013\u0002\u00d0\u00ce\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1)\u0003",
    "\u0002\u0002\u0002\u00d2\u00d5\u0005,\u0017\u0002\u00d3\u00d4\t\u0006",
    "\u0002\u0002\u00d4\u00d6\u0005$\u0013\u0002\u00d5\u00d3\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6+\u0003\u0002",
    "\u0002\u0002\u00d7\u00da\u0005.\u0018\u0002\u00d8\u00d9\t\u0007\u0002",
    "\u0002\u00d9\u00db\u0005$\u0013\u0002\u00da\u00d8\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db-\u0003\u0002\u0002",
    "\u0002\u00dc\u00df\u00050\u0019\u0002\u00dd\u00de\u0007\u001d\u0002",
    "\u0002\u00de\u00e0\u0005$\u0013\u0002\u00df\u00dd\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0/\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0007\u001e\u0002\u0002\u00e2\u00e5\u0005$\u0013",
    "\u0002\u00e3\u00e5\u00052\u001a\u0002\u00e4\u00e1\u0003\u0002\u0002",
    "\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e51\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\t\u0006\u0002\u0002\u00e7\u00ea\u0005$\u0013\u0002",
    "\u00e8\u00ea\u00054\u001b\u0002\u00e9\u00e6\u0003\u0002\u0002\u0002",
    "\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea3\u0003\u0002\u0002\u0002",
    "\u00eb\u00ed\u00058\u001d\u0002\u00ec\u00ee\u0005> \u0002\u00ed\u00ec",
    "\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee5",
    "\u0003\u0002\u0002\u0002\u00ef\u00f4\u0005$\u0013\u0002\u00f0\u00f1",
    "\u0007\u0007\u0002\u0002\u00f1\u00f3\u0005$\u0013\u0002\u00f2\u00f0",
    "\u0003\u0002\u0002\u0002\u00f3\u00f6\u0003\u0002\u0002\u0002\u00f4\u00f2",
    "\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f57",
    "\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f7\u00f9",
    "\u0005:\u001e\u0002\u00f8\u00fa\u0005@!\u0002\u00f9\u00f8\u0003\u0002",
    "\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa9\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0007\u001f\u0002\u0002\u00fc\u00fd\u00077",
    "\u0002\u0002\u00fd\u00ff\u0007:\u0002\u0002\u00fe\u0100\u00056\u001c",
    "\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0104\u0007;\u0002",
    "\u0002\u0102\u0104\u0005<\u001f\u0002\u0103\u00fb\u0003\u0002\u0002",
    "\u0002\u0103\u0102\u0003\u0002\u0002\u0002\u0104;\u0003\u0002\u0002",
    "\u0002\u0105\u0111\u0007 \u0002\u0002\u0106\u0107\u0007:\u0002\u0002",
    "\u0107\u0108\u0005$\u0013\u0002\u0108\u0109\u0007;\u0002\u0002\u0109",
    "\u0111\u0003\u0002\u0002\u0002\u010a\u0111\u00077\u0002\u0002\u010b",
    "\u0111\u00075\u0002\u0002\u010c\u0111\u00076\u0002\u0002\u010d\u0111",
    "\u00073\u0002\u0002\u010e\u0111\u00074\u0002\u0002\u010f\u0111\u0007",
    "!\u0002\u0002\u0110\u0105\u0003\u0002\u0002\u0002\u0110\u0106\u0003",
    "\u0002\u0002\u0002\u0110\u010a\u0003\u0002\u0002\u0002\u0110\u010b\u0003",
    "\u0002\u0002\u0002\u0110\u010c\u0003\u0002\u0002\u0002\u0110\u010d\u0003",
    "\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0110\u010f\u0003",
    "\u0002\u0002\u0002\u0111\u0116\u0003\u0002\u0002\u0002\u0112\u0115\u0005",
    "> \u0002\u0113\u0115\u0005@!\u0002\u0114\u0112\u0003\u0002\u0002\u0002",
    "\u0114\u0113\u0003\u0002\u0002\u0002\u0115\u0118\u0003\u0002\u0002\u0002",
    "\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002",
    "\u0117=\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002",
    "\u0119\u011a\u0007\r\u0002\u0002\u011a\u011b\u0005$\u0013\u0002\u011b",
    "\u011c\u0007\u000e\u0002\u0002\u011c?\u0003\u0002\u0002\u0002\u011d",
    "\u011e\u0007\"\u0002\u0002\u011e\u0124\u00077\u0002\u0002\u011f\u0121",
    "\u0007:\u0002\u0002\u0120\u0122\u00056\u001c\u0002\u0121\u0120\u0003",
    "\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u0123\u0003",
    "\u0002\u0002\u0002\u0123\u0125\u0007;\u0002\u0002\u0124\u011f\u0003",
    "\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125A\u0003",
    "\u0002\u0002\u0002\u0126\u012f\u0005D#\u0002\u0127\u012f\u0005F$\u0002",
    "\u0128\u012f\u0005H%\u0002\u0129\u012f\u0005J&\u0002\u012a\u012f\u0005",
    "N(\u0002\u012b\u012f\u0005P)\u0002\u012c\u012f\u0005R*\u0002\u012d\u012f",
    "\u0005T+\u0002\u012e\u0126\u0003\u0002\u0002\u0002\u012e\u0127\u0003",
    "\u0002\u0002\u0002\u012e\u0128\u0003\u0002\u0002\u0002\u012e\u0129\u0003",
    "\u0002\u0002\u0002\u012e\u012a\u0003\u0002\u0002\u0002\u012e\u012b\u0003",
    "\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012e\u012d\u0003",
    "\u0002\u0002\u0002\u012fC\u0003\u0002\u0002\u0002\u0130\u0136\u0007",
    "8\u0002\u0002\u0131\u0133\u0005\b\u0005\u0002\u0132\u0131\u0003\u0002",
    "\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002",
    "\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u0137\u0003\u0002",
    "\u0002\u0002\u0136\u0132\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002",
    "\u0002\u0002\u0137\u013b\u0003\u0002\u0002\u0002\u0138\u013a\u0005B",
    "\"\u0002\u0139\u0138\u0003\u0002\u0002\u0002\u013a\u013d\u0003\u0002",
    "\u0002\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002",
    "\u0002\u0002\u013c\u013e\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002",
    "\u0002\u0002\u013e\u013f\u00079\u0002\u0002\u013fE\u0003\u0002\u0002",
    "\u0002\u0140\u0141\u0007#\u0002\u0002\u0141\u0142\u0005$\u0013\u0002",
    "\u0142\u0143\u0007$\u0002\u0002\u0143\u0146\u0005B\"\u0002\u0144\u0145",
    "\u0007%\u0002\u0002\u0145\u0147\u0005B\"\u0002\u0146\u0144\u0003\u0002",
    "\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147G\u0003\u0002",
    "\u0002\u0002\u0148\u0149\u0007&\u0002\u0002\u0149\u014a\u0005$\u0013",
    "\u0002\u014a\u014b\u0007\'\u0002\u0002\u014b\u014c\u0005B\"\u0002\u014c",
    "I\u0003\u0002\u0002\u0002\u014d\u014e\u0005L\'\u0002\u014e\u014f\u0007",
    "(\u0002\u0002\u014f\u0150\u0005$\u0013\u0002\u0150\u0151\u00071\u0002",
    "\u0002\u0151K\u0003\u0002\u0002\u0002\u0152\u0153\u00058\u001d\u0002",
    "\u0153\u0154\u0007\r\u0002\u0002\u0154\u0155\u0005$\u0013\u0002\u0155",
    "\u0156\u0007\u000e\u0002\u0002\u0156\u015d\u0003\u0002\u0002\u0002\u0157",
    "\u0158\u0005:\u001e\u0002\u0158\u0159\u0007\"\u0002\u0002\u0159\u015a",
    "\u00077\u0002\u0002\u015a\u015d\u0003\u0002\u0002\u0002\u015b\u015d",
    "\u00077\u0002\u0002\u015c\u0152\u0003\u0002\u0002\u0002\u015c\u0157",
    "\u0003\u0002\u0002\u0002\u015c\u015b\u0003\u0002\u0002\u0002\u015dM",
    "\u0003\u0002\u0002\u0002\u015e\u015f\u0007)\u0002\u0002\u015f\u0160",
    "\u00071\u0002\u0002\u0160O\u0003\u0002\u0002\u0002\u0161\u0162\u0007",
    "*\u0002\u0002\u0162\u0163\u00071\u0002\u0002\u0163Q\u0003\u0002\u0002",
    "\u0002\u0164\u0165\u0007+\u0002\u0002\u0165\u0166\u0005$\u0013\u0002",
    "\u0166\u0167\u00071\u0002\u0002\u0167S\u0003\u0002\u0002\u0002\u0168",
    "\u0169\u00058\u001d\u0002\u0169\u016a\u00071\u0002\u0002\u016aU\u0003",
    "\u0002\u0002\u0002*Yaekmpv}\u008e\u0094\u009a\u009f\u00a4\u00ab\u00b2",
    "\u00bf\u00c6\u00cb\u00d0\u00d5\u00da\u00df\u00e4\u00e9\u00ed\u00f4\u00f9",
    "\u00ff\u0103\u0110\u0114\u0116\u0121\u0124\u012e\u0134\u0136\u013b\u0146",
    "\u015c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'class'", "'extends'", "'='", "':'", "','", 
                     "'integer'", "'bool'", "'float'", "'string'", "'void'", 
                     "'['", "']'", "'>'", "'<'", "'>='", "'<='", "'=='", 
                     "'<>'", "'&&'", "'||'", "'+'", "'-'", "'*'", "'\\'", 
                     "'/'", "'%'", "'^'", "'!'", "'new'", "'self'", "'null'", 
                     "'.'", "'if'", "'then'", "'else'", "'while'", "'do'", 
                     "':='", "'break'", "'continue'", "'return'", 'null', 
                     "'static'", "'final'", 'null', 'null', "';'", 'null', 
                     'null', 'null', 'null', 'null', 'null', "'{'", "'}'", 
                     "'('", "')'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "KW", "KW_STATIC", "KW_FINAL", "OP", "OP2", "DELI_SEMI", 
                      "DELI", "BOOL_LIT", "FLOAT_LIT", "INT_LIT", "STR_LIT", 
                      "ID", "LP", "RP", "LB", "RB", "WS", "LINE_CMT", "BLOCK_CMT", 
                      "OTHER" ];

var ruleNames =  [ "program", "class_def", "class_memlist", "class_attr", 
                   "class_attr_nonstatic", "class_attr_types", "decl_const", 
                   "decl_var", "id_list", "decl_method", "param_list", "type_all", 
                   "type_primitives", "type_void", "type_array", "type_array_elem", 
                   "type_class", "expr_def", "expr_relational", "expr_bool", 
                   "expr_arithmetic_addbin", "expr_arithmetic_mulbin", "expr_string", 
                   "expr_bool_not", "expr_arithmetic_add", "expr_index", 
                   "expr_member_access_params", "expr_member_access", "expr_object_creation", 
                   "expr_term", "expr_fragment_index", "expr_fragment_memaccess", 
                   "stmt_all", "stmt_block", "stmt_if", "stmt_while", "stmt_assign", 
                   "stmt_lefthand", "stmt_break", "stmt_continue", "stmt_return", 
                   "stmt_method_invocation" ];

function BKOOLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BKOOLParser.prototype = Object.create(antlr4.Parser.prototype);
BKOOLParser.prototype.constructor = BKOOLParser;

Object.defineProperty(BKOOLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BKOOLParser.EOF = antlr4.Token.EOF;
BKOOLParser.T__0 = 1;
BKOOLParser.T__1 = 2;
BKOOLParser.T__2 = 3;
BKOOLParser.T__3 = 4;
BKOOLParser.T__4 = 5;
BKOOLParser.T__5 = 6;
BKOOLParser.T__6 = 7;
BKOOLParser.T__7 = 8;
BKOOLParser.T__8 = 9;
BKOOLParser.T__9 = 10;
BKOOLParser.T__10 = 11;
BKOOLParser.T__11 = 12;
BKOOLParser.T__12 = 13;
BKOOLParser.T__13 = 14;
BKOOLParser.T__14 = 15;
BKOOLParser.T__15 = 16;
BKOOLParser.T__16 = 17;
BKOOLParser.T__17 = 18;
BKOOLParser.T__18 = 19;
BKOOLParser.T__19 = 20;
BKOOLParser.T__20 = 21;
BKOOLParser.T__21 = 22;
BKOOLParser.T__22 = 23;
BKOOLParser.T__23 = 24;
BKOOLParser.T__24 = 25;
BKOOLParser.T__25 = 26;
BKOOLParser.T__26 = 27;
BKOOLParser.T__27 = 28;
BKOOLParser.T__28 = 29;
BKOOLParser.T__29 = 30;
BKOOLParser.T__30 = 31;
BKOOLParser.T__31 = 32;
BKOOLParser.T__32 = 33;
BKOOLParser.T__33 = 34;
BKOOLParser.T__34 = 35;
BKOOLParser.T__35 = 36;
BKOOLParser.T__36 = 37;
BKOOLParser.T__37 = 38;
BKOOLParser.T__38 = 39;
BKOOLParser.T__39 = 40;
BKOOLParser.T__40 = 41;
BKOOLParser.KW = 42;
BKOOLParser.KW_STATIC = 43;
BKOOLParser.KW_FINAL = 44;
BKOOLParser.OP = 45;
BKOOLParser.OP2 = 46;
BKOOLParser.DELI_SEMI = 47;
BKOOLParser.DELI = 48;
BKOOLParser.BOOL_LIT = 49;
BKOOLParser.FLOAT_LIT = 50;
BKOOLParser.INT_LIT = 51;
BKOOLParser.STR_LIT = 52;
BKOOLParser.ID = 53;
BKOOLParser.LP = 54;
BKOOLParser.RP = 55;
BKOOLParser.LB = 56;
BKOOLParser.RB = 57;
BKOOLParser.WS = 58;
BKOOLParser.LINE_CMT = 59;
BKOOLParser.BLOCK_CMT = 60;
BKOOLParser.OTHER = 61;

BKOOLParser.RULE_program = 0;
BKOOLParser.RULE_class_def = 1;
BKOOLParser.RULE_class_memlist = 2;
BKOOLParser.RULE_class_attr = 3;
BKOOLParser.RULE_class_attr_nonstatic = 4;
BKOOLParser.RULE_class_attr_types = 5;
BKOOLParser.RULE_decl_const = 6;
BKOOLParser.RULE_decl_var = 7;
BKOOLParser.RULE_id_list = 8;
BKOOLParser.RULE_decl_method = 9;
BKOOLParser.RULE_param_list = 10;
BKOOLParser.RULE_type_all = 11;
BKOOLParser.RULE_type_primitives = 12;
BKOOLParser.RULE_type_void = 13;
BKOOLParser.RULE_type_array = 14;
BKOOLParser.RULE_type_array_elem = 15;
BKOOLParser.RULE_type_class = 16;
BKOOLParser.RULE_expr_def = 17;
BKOOLParser.RULE_expr_relational = 18;
BKOOLParser.RULE_expr_bool = 19;
BKOOLParser.RULE_expr_arithmetic_addbin = 20;
BKOOLParser.RULE_expr_arithmetic_mulbin = 21;
BKOOLParser.RULE_expr_string = 22;
BKOOLParser.RULE_expr_bool_not = 23;
BKOOLParser.RULE_expr_arithmetic_add = 24;
BKOOLParser.RULE_expr_index = 25;
BKOOLParser.RULE_expr_member_access_params = 26;
BKOOLParser.RULE_expr_member_access = 27;
BKOOLParser.RULE_expr_object_creation = 28;
BKOOLParser.RULE_expr_term = 29;
BKOOLParser.RULE_expr_fragment_index = 30;
BKOOLParser.RULE_expr_fragment_memaccess = 31;
BKOOLParser.RULE_stmt_all = 32;
BKOOLParser.RULE_stmt_block = 33;
BKOOLParser.RULE_stmt_if = 34;
BKOOLParser.RULE_stmt_while = 35;
BKOOLParser.RULE_stmt_assign = 36;
BKOOLParser.RULE_stmt_lefthand = 37;
BKOOLParser.RULE_stmt_break = 38;
BKOOLParser.RULE_stmt_continue = 39;
BKOOLParser.RULE_stmt_return = 40;
BKOOLParser.RULE_stmt_method_invocation = 41;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(BKOOLParser.EOF, 0);
};

ProgramContext.prototype.class_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Class_defContext);
    } else {
        return this.getTypedRuleContext(Class_defContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitProgram(this);
	}
};




BKOOLParser.ProgramContext = ProgramContext;

BKOOLParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BKOOLParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 84;
            this.class_def();
            this.state = 87; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BKOOLParser.T__0);
        this.state = 89;
        this.match(BKOOLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Class_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_class_def;
    this.className = null; // Token
    this.superClass = null; // Token
    return this;
}

Class_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_defContext.prototype.constructor = Class_defContext;

Class_defContext.prototype.LP = function() {
    return this.getToken(BKOOLParser.LP, 0);
};

Class_defContext.prototype.RP = function() {
    return this.getToken(BKOOLParser.RP, 0);
};

Class_defContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BKOOLParser.ID);
    } else {
        return this.getToken(BKOOLParser.ID, i);
    }
};


Class_defContext.prototype.class_memlist = function() {
    return this.getTypedRuleContext(Class_memlistContext,0);
};

Class_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterClass_def(this);
	}
};

Class_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitClass_def(this);
	}
};




BKOOLParser.Class_defContext = Class_defContext;

BKOOLParser.prototype.class_def = function() {

    var localctx = new Class_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BKOOLParser.RULE_class_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(BKOOLParser.T__0);
        this.state = 92;
        localctx.className = this.match(BKOOLParser.ID);
        this.state = 95;
        _la = this._input.LA(1);
        if(_la===BKOOLParser.T__1) {
            this.state = 93;
            this.match(BKOOLParser.T__1);
            this.state = 94;
            localctx.superClass = this.match(BKOOLParser.ID);
        }

        this.state = 97;
        this.match(BKOOLParser.LP);
        this.state = 99;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__5) | (1 << BKOOLParser.T__6) | (1 << BKOOLParser.T__7) | (1 << BKOOLParser.T__8) | (1 << BKOOLParser.T__9))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BKOOLParser.KW_STATIC - 43)) | (1 << (BKOOLParser.KW_FINAL - 43)) | (1 << (BKOOLParser.ID - 43)))) !== 0)) {
            this.state = 98;
            this.class_memlist();
        }

        this.state = 101;
        this.match(BKOOLParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Class_memlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_class_memlist;
    return this;
}

Class_memlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_memlistContext.prototype.constructor = Class_memlistContext;

Class_memlistContext.prototype.class_attr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Class_attrContext);
    } else {
        return this.getTypedRuleContext(Class_attrContext,i);
    }
};

Class_memlistContext.prototype.decl_method = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_methodContext);
    } else {
        return this.getTypedRuleContext(Decl_methodContext,i);
    }
};

Class_memlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterClass_memlist(this);
	}
};

Class_memlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitClass_memlist(this);
	}
};




BKOOLParser.Class_memlistContext = Class_memlistContext;

BKOOLParser.prototype.class_memlist = function() {

    var localctx = new Class_memlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BKOOLParser.RULE_class_memlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 105;
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            switch(la_) {
            case 1:
                this.state = 103;
                this.class_attr();
                break;

            case 2:
                this.state = 104;
                this.decl_method();
                break;

            }
            this.state = 107; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__5) | (1 << BKOOLParser.T__6) | (1 << BKOOLParser.T__7) | (1 << BKOOLParser.T__8) | (1 << BKOOLParser.T__9))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BKOOLParser.KW_STATIC - 43)) | (1 << (BKOOLParser.KW_FINAL - 43)) | (1 << (BKOOLParser.ID - 43)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Class_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_class_attr;
    this.decl = null; // Class_attr_nonstaticContext
    return this;
}

Class_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_attrContext.prototype.constructor = Class_attrContext;

Class_attrContext.prototype.class_attr_nonstatic = function() {
    return this.getTypedRuleContext(Class_attr_nonstaticContext,0);
};

Class_attrContext.prototype.KW_STATIC = function() {
    return this.getToken(BKOOLParser.KW_STATIC, 0);
};

Class_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterClass_attr(this);
	}
};

Class_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitClass_attr(this);
	}
};




BKOOLParser.Class_attrContext = Class_attrContext;

BKOOLParser.prototype.class_attr = function() {

    var localctx = new Class_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BKOOLParser.RULE_class_attr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        _la = this._input.LA(1);
        if(_la===BKOOLParser.KW_STATIC) {
            this.state = 109;
            this.match(BKOOLParser.KW_STATIC);
        }

        this.state = 112;
        localctx.decl = this.class_attr_nonstatic();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Class_attr_nonstaticContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_class_attr_nonstatic;
    this.attrConst = null; // Decl_constContext
    this.attrVars = null; // Decl_varContext
    return this;
}

Class_attr_nonstaticContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_attr_nonstaticContext.prototype.constructor = Class_attr_nonstaticContext;

Class_attr_nonstaticContext.prototype.decl_const = function() {
    return this.getTypedRuleContext(Decl_constContext,0);
};

Class_attr_nonstaticContext.prototype.decl_var = function() {
    return this.getTypedRuleContext(Decl_varContext,0);
};

Class_attr_nonstaticContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterClass_attr_nonstatic(this);
	}
};

Class_attr_nonstaticContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitClass_attr_nonstatic(this);
	}
};




BKOOLParser.Class_attr_nonstaticContext = Class_attr_nonstaticContext;

BKOOLParser.prototype.class_attr_nonstatic = function() {

    var localctx = new Class_attr_nonstaticContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BKOOLParser.RULE_class_attr_nonstatic);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        switch(this._input.LA(1)) {
        case BKOOLParser.KW_FINAL:
            this.state = 114;
            localctx.attrConst = this.decl_const();
            break;
        case BKOOLParser.ID:
            this.state = 115;
            localctx.attrVars = this.decl_var();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 118;
        this.match(BKOOLParser.DELI_SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Class_attr_typesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_class_attr_types;
    this.t0 = null; // Type_arrayContext
    this.t1 = null; // Type_primitivesContext
    this.t2 = null; // Type_classContext
    return this;
}

Class_attr_typesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_attr_typesContext.prototype.constructor = Class_attr_typesContext;

Class_attr_typesContext.prototype.type_array = function() {
    return this.getTypedRuleContext(Type_arrayContext,0);
};

Class_attr_typesContext.prototype.type_primitives = function() {
    return this.getTypedRuleContext(Type_primitivesContext,0);
};

Class_attr_typesContext.prototype.type_class = function() {
    return this.getTypedRuleContext(Type_classContext,0);
};

Class_attr_typesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterClass_attr_types(this);
	}
};

Class_attr_typesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitClass_attr_types(this);
	}
};




BKOOLParser.Class_attr_typesContext = Class_attr_typesContext;

BKOOLParser.prototype.class_attr_types = function() {

    var localctx = new Class_attr_typesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BKOOLParser.RULE_class_attr_types);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.state = 120;
            localctx.t0 = this.type_array();
            break;

        case 2:
            this.state = 121;
            localctx.t1 = this.type_primitives();
            break;

        case 3:
            this.state = 122;
            localctx.t2 = this.type_class();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_constContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_decl_const;
    this.constType = null; // Class_attr_typesContext
    this.id = null; // Token
    this.expr = null; // Expr_defContext
    return this;
}

Decl_constContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_constContext.prototype.constructor = Decl_constContext;

Decl_constContext.prototype.KW_FINAL = function() {
    return this.getToken(BKOOLParser.KW_FINAL, 0);
};

Decl_constContext.prototype.class_attr_types = function() {
    return this.getTypedRuleContext(Class_attr_typesContext,0);
};

Decl_constContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Decl_constContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Decl_constContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterDecl_const(this);
	}
};

Decl_constContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitDecl_const(this);
	}
};




BKOOLParser.Decl_constContext = Decl_constContext;

BKOOLParser.prototype.decl_const = function() {

    var localctx = new Decl_constContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BKOOLParser.RULE_decl_const);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(BKOOLParser.KW_FINAL);
        this.state = 126;
        localctx.constType = this.class_attr_types();
        this.state = 127;
        localctx.id = this.match(BKOOLParser.ID);
        this.state = 128;
        this.match(BKOOLParser.T__2);
        this.state = 129;
        localctx.expr = this.expr_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_varContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_decl_var;
    this.idlist = null; // Id_listContext
    this.varType = null; // Class_attr_typesContext
    return this;
}

Decl_varContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_varContext.prototype.constructor = Decl_varContext;

Decl_varContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

Decl_varContext.prototype.class_attr_types = function() {
    return this.getTypedRuleContext(Class_attr_typesContext,0);
};

Decl_varContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterDecl_var(this);
	}
};

Decl_varContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitDecl_var(this);
	}
};




BKOOLParser.Decl_varContext = Decl_varContext;

BKOOLParser.prototype.decl_var = function() {

    var localctx = new Decl_varContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BKOOLParser.RULE_decl_var);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        localctx.idlist = this.id_list();
        this.state = 132;
        this.match(BKOOLParser.T__3);
        this.state = 133;
        localctx.varType = this.class_attr_types();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Id_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_id_list;
    return this;
}

Id_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id_listContext.prototype.constructor = Id_listContext;

Id_listContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BKOOLParser.ID);
    } else {
        return this.getToken(BKOOLParser.ID, i);
    }
};


Id_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterId_list(this);
	}
};

Id_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitId_list(this);
	}
};




BKOOLParser.Id_listContext = Id_listContext;

BKOOLParser.prototype.id_list = function() {

    var localctx = new Id_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BKOOLParser.RULE_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(BKOOLParser.ID);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BKOOLParser.T__4) {
            this.state = 136;
            this.match(BKOOLParser.T__4);
            this.state = 137;
            this.match(BKOOLParser.ID);
            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Decl_methodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_decl_method;
    this.methodName = null; // Token
    this.paramlist = null; // Param_listContext
    this.block = null; // Stmt_blockContext
    this.methodType = null; // Type_allContext
    this.methodStatic = null; // Token
    return this;
}

Decl_methodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_methodContext.prototype.constructor = Decl_methodContext;

Decl_methodContext.prototype.LB = function() {
    return this.getToken(BKOOLParser.LB, 0);
};

Decl_methodContext.prototype.RB = function() {
    return this.getToken(BKOOLParser.RB, 0);
};

Decl_methodContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Decl_methodContext.prototype.stmt_block = function() {
    return this.getTypedRuleContext(Stmt_blockContext,0);
};

Decl_methodContext.prototype.param_list = function() {
    return this.getTypedRuleContext(Param_listContext,0);
};

Decl_methodContext.prototype.type_all = function() {
    return this.getTypedRuleContext(Type_allContext,0);
};

Decl_methodContext.prototype.KW_STATIC = function() {
    return this.getToken(BKOOLParser.KW_STATIC, 0);
};

Decl_methodContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterDecl_method(this);
	}
};

Decl_methodContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitDecl_method(this);
	}
};




BKOOLParser.Decl_methodContext = Decl_methodContext;

BKOOLParser.prototype.decl_method = function() {

    var localctx = new Decl_methodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BKOOLParser.RULE_decl_method);
    var _la = 0; // Token type
    try {
        this.state = 162;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            localctx.methodName = this.match(BKOOLParser.ID);
            this.state = 144;
            this.match(BKOOLParser.LB);
            this.state = 146;
            _la = this._input.LA(1);
            if(_la===BKOOLParser.ID) {
                this.state = 145;
                localctx.paramlist = this.param_list();
            }

            this.state = 148;
            this.match(BKOOLParser.RB);
            this.state = 149;
            localctx.block = this.stmt_block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            localctx.methodType = this.type_all();
            this.state = 152;
            _la = this._input.LA(1);
            if(_la===BKOOLParser.KW_STATIC) {
                this.state = 151;
                localctx.methodStatic = this.match(BKOOLParser.KW_STATIC);
            }

            this.state = 154;
            localctx.methodName = this.match(BKOOLParser.ID);
            this.state = 155;
            this.match(BKOOLParser.LB);
            this.state = 157;
            _la = this._input.LA(1);
            if(_la===BKOOLParser.ID) {
                this.state = 156;
                localctx.paramlist = this.param_list();
            }

            this.state = 159;
            this.match(BKOOLParser.RB);
            this.state = 160;
            localctx.block = this.stmt_block();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Param_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_param_list;
    this._decl_var = null; // Decl_varContext
    this.vars = []; // of Decl_varContexts
    return this;
}

Param_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Param_listContext.prototype.constructor = Param_listContext;

Param_listContext.prototype.decl_var = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_varContext);
    } else {
        return this.getTypedRuleContext(Decl_varContext,i);
    }
};

Param_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterParam_list(this);
	}
};

Param_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitParam_list(this);
	}
};




BKOOLParser.Param_listContext = Param_listContext;

BKOOLParser.prototype.param_list = function() {

    var localctx = new Param_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BKOOLParser.RULE_param_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        localctx._decl_var = this.decl_var();
        localctx.vars.push(localctx._decl_var);
        this.state = 169;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BKOOLParser.DELI_SEMI) {
            this.state = 165;
            this.match(BKOOLParser.DELI_SEMI);
            this.state = 166;
            localctx._decl_var = this.decl_var();
            localctx.vars.push(localctx._decl_var);
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_allContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_type_all;
    this.t0 = null; // Type_primitivesContext
    this.t1 = null; // Type_arrayContext
    this.t2 = null; // Type_classContext
    this.t3 = null; // Type_voidContext
    return this;
}

Type_allContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_allContext.prototype.constructor = Type_allContext;

Type_allContext.prototype.type_primitives = function() {
    return this.getTypedRuleContext(Type_primitivesContext,0);
};

Type_allContext.prototype.type_array = function() {
    return this.getTypedRuleContext(Type_arrayContext,0);
};

Type_allContext.prototype.type_class = function() {
    return this.getTypedRuleContext(Type_classContext,0);
};

Type_allContext.prototype.type_void = function() {
    return this.getTypedRuleContext(Type_voidContext,0);
};

Type_allContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterType_all(this);
	}
};

Type_allContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitType_all(this);
	}
};




BKOOLParser.Type_allContext = Type_allContext;

BKOOLParser.prototype.type_all = function() {

    var localctx = new Type_allContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BKOOLParser.RULE_type_all);
    try {
        this.state = 176;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 172;
            localctx.t0 = this.type_primitives();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 173;
            localctx.t1 = this.type_array();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 174;
            localctx.t2 = this.type_class();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 175;
            localctx.t3 = this.type_void();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_primitivesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_type_primitives;
    return this;
}

Type_primitivesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_primitivesContext.prototype.constructor = Type_primitivesContext;


Type_primitivesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterType_primitives(this);
	}
};

Type_primitivesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitType_primitives(this);
	}
};




BKOOLParser.Type_primitivesContext = Type_primitivesContext;

BKOOLParser.prototype.type_primitives = function() {

    var localctx = new Type_primitivesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BKOOLParser.RULE_type_primitives);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__5) | (1 << BKOOLParser.T__6) | (1 << BKOOLParser.T__7) | (1 << BKOOLParser.T__8))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_voidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_type_void;
    return this;
}

Type_voidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_voidContext.prototype.constructor = Type_voidContext;


Type_voidContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterType_void(this);
	}
};

Type_voidContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitType_void(this);
	}
};




BKOOLParser.Type_voidContext = Type_voidContext;

BKOOLParser.prototype.type_void = function() {

    var localctx = new Type_voidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BKOOLParser.RULE_type_void);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(BKOOLParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_type_array;
    this.elem = null; // Type_array_elemContext
    this.size = null; // Token
    return this;
}

Type_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_arrayContext.prototype.constructor = Type_arrayContext;

Type_arrayContext.prototype.type_array_elem = function() {
    return this.getTypedRuleContext(Type_array_elemContext,0);
};

Type_arrayContext.prototype.INT_LIT = function() {
    return this.getToken(BKOOLParser.INT_LIT, 0);
};

Type_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterType_array(this);
	}
};

Type_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitType_array(this);
	}
};




BKOOLParser.Type_arrayContext = Type_arrayContext;

BKOOLParser.prototype.type_array = function() {

    var localctx = new Type_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BKOOLParser.RULE_type_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        localctx.elem = this.type_array_elem();
        this.state = 183;
        this.match(BKOOLParser.T__10);
        this.state = 184;
        localctx.size = this.match(BKOOLParser.INT_LIT);
        this.state = 185;
        this.match(BKOOLParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_array_elemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_type_array_elem;
    this.typePrimitives = null; // Type_primitivesContext
    this.typeClass = null; // Type_classContext
    return this;
}

Type_array_elemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_array_elemContext.prototype.constructor = Type_array_elemContext;

Type_array_elemContext.prototype.type_primitives = function() {
    return this.getTypedRuleContext(Type_primitivesContext,0);
};

Type_array_elemContext.prototype.type_class = function() {
    return this.getTypedRuleContext(Type_classContext,0);
};

Type_array_elemContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterType_array_elem(this);
	}
};

Type_array_elemContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitType_array_elem(this);
	}
};




BKOOLParser.Type_array_elemContext = Type_array_elemContext;

BKOOLParser.prototype.type_array_elem = function() {

    var localctx = new Type_array_elemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BKOOLParser.RULE_type_array_elem);
    try {
        this.state = 189;
        switch(this._input.LA(1)) {
        case BKOOLParser.T__5:
        case BKOOLParser.T__6:
        case BKOOLParser.T__7:
        case BKOOLParser.T__8:
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            localctx.typePrimitives = this.type_primitives();
            break;
        case BKOOLParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 188;
            localctx.typeClass = this.type_class();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_classContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_type_class;
    return this;
}

Type_classContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_classContext.prototype.constructor = Type_classContext;

Type_classContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Type_classContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterType_class(this);
	}
};

Type_classContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitType_class(this);
	}
};




BKOOLParser.Type_classContext = Type_classContext;

BKOOLParser.prototype.type_class = function() {

    var localctx = new Type_classContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BKOOLParser.RULE_type_class);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(BKOOLParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_def;
    this.left = null; // Expr_relationalContext
    this.op = null; // Token
    this.right = null; // Expr_defContext
    return this;
}

Expr_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_defContext.prototype.constructor = Expr_defContext;

Expr_defContext.prototype.expr_relational = function() {
    return this.getTypedRuleContext(Expr_relationalContext,0);
};

Expr_defContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_def(this);
	}
};

Expr_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_def(this);
	}
};




BKOOLParser.Expr_defContext = Expr_defContext;

BKOOLParser.prototype.expr_def = function() {

    var localctx = new Expr_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BKOOLParser.RULE_expr_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        localctx.left = this.expr_relational();
        this.state = 196;
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 194;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__12) | (1 << BKOOLParser.T__13) | (1 << BKOOLParser.T__14) | (1 << BKOOLParser.T__15))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 195;
            localctx.right = this.expr_def();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_relationalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_relational;
    this.left = null; // Expr_boolContext
    this.op = null; // Token
    this.right = null; // Expr_defContext
    return this;
}

Expr_relationalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_relationalContext.prototype.constructor = Expr_relationalContext;

Expr_relationalContext.prototype.expr_bool = function() {
    return this.getTypedRuleContext(Expr_boolContext,0);
};

Expr_relationalContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_relationalContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_relational(this);
	}
};

Expr_relationalContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_relational(this);
	}
};




BKOOLParser.Expr_relationalContext = Expr_relationalContext;

BKOOLParser.prototype.expr_relational = function() {

    var localctx = new Expr_relationalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BKOOLParser.RULE_expr_relational);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        localctx.left = this.expr_bool();
        this.state = 201;
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 199;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BKOOLParser.T__16 || _la===BKOOLParser.T__17)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 200;
            localctx.right = this.expr_def();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_boolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_bool;
    this.left = null; // Expr_arithmetic_addbinContext
    this.op = null; // Token
    this.right = null; // Expr_defContext
    return this;
}

Expr_boolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_boolContext.prototype.constructor = Expr_boolContext;

Expr_boolContext.prototype.expr_arithmetic_addbin = function() {
    return this.getTypedRuleContext(Expr_arithmetic_addbinContext,0);
};

Expr_boolContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_boolContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_bool(this);
	}
};

Expr_boolContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_bool(this);
	}
};




BKOOLParser.Expr_boolContext = Expr_boolContext;

BKOOLParser.prototype.expr_bool = function() {

    var localctx = new Expr_boolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BKOOLParser.RULE_expr_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        localctx.left = this.expr_arithmetic_addbin();
        this.state = 206;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 204;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BKOOLParser.T__18 || _la===BKOOLParser.T__19)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 205;
            localctx.right = this.expr_def();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_arithmetic_addbinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_arithmetic_addbin;
    this.left = null; // Expr_arithmetic_mulbinContext
    this.op = null; // Token
    this.right = null; // Expr_defContext
    return this;
}

Expr_arithmetic_addbinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_arithmetic_addbinContext.prototype.constructor = Expr_arithmetic_addbinContext;

Expr_arithmetic_addbinContext.prototype.expr_arithmetic_mulbin = function() {
    return this.getTypedRuleContext(Expr_arithmetic_mulbinContext,0);
};

Expr_arithmetic_addbinContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_arithmetic_addbinContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_arithmetic_addbin(this);
	}
};

Expr_arithmetic_addbinContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_arithmetic_addbin(this);
	}
};




BKOOLParser.Expr_arithmetic_addbinContext = Expr_arithmetic_addbinContext;

BKOOLParser.prototype.expr_arithmetic_addbin = function() {

    var localctx = new Expr_arithmetic_addbinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BKOOLParser.RULE_expr_arithmetic_addbin);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        localctx.left = this.expr_arithmetic_mulbin();
        this.state = 211;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 209;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BKOOLParser.T__20 || _la===BKOOLParser.T__21)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 210;
            localctx.right = this.expr_def();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_arithmetic_mulbinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_arithmetic_mulbin;
    this.left = null; // Expr_stringContext
    this.op = null; // Token
    this.right = null; // Expr_defContext
    return this;
}

Expr_arithmetic_mulbinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_arithmetic_mulbinContext.prototype.constructor = Expr_arithmetic_mulbinContext;

Expr_arithmetic_mulbinContext.prototype.expr_string = function() {
    return this.getTypedRuleContext(Expr_stringContext,0);
};

Expr_arithmetic_mulbinContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_arithmetic_mulbinContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_arithmetic_mulbin(this);
	}
};

Expr_arithmetic_mulbinContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_arithmetic_mulbin(this);
	}
};




BKOOLParser.Expr_arithmetic_mulbinContext = Expr_arithmetic_mulbinContext;

BKOOLParser.prototype.expr_arithmetic_mulbin = function() {

    var localctx = new Expr_arithmetic_mulbinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BKOOLParser.RULE_expr_arithmetic_mulbin);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        localctx.left = this.expr_string();
        this.state = 216;
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        if(la_===1) {
            this.state = 214;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__22) | (1 << BKOOLParser.T__23) | (1 << BKOOLParser.T__24) | (1 << BKOOLParser.T__25))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 215;
            localctx.right = this.expr_def();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_stringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_string;
    this.left = null; // Expr_bool_notContext
    this.op = null; // Token
    this.right = null; // Expr_defContext
    return this;
}

Expr_stringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_stringContext.prototype.constructor = Expr_stringContext;

Expr_stringContext.prototype.expr_bool_not = function() {
    return this.getTypedRuleContext(Expr_bool_notContext,0);
};

Expr_stringContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_stringContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_string(this);
	}
};

Expr_stringContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_string(this);
	}
};




BKOOLParser.Expr_stringContext = Expr_stringContext;

BKOOLParser.prototype.expr_string = function() {

    var localctx = new Expr_stringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BKOOLParser.RULE_expr_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        localctx.left = this.expr_bool_not();
        this.state = 221;
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 219;
            localctx.op = this.match(BKOOLParser.T__26);
            this.state = 220;
            localctx.right = this.expr_def();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_bool_notContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_bool_not;
    this.expr0 = null; // Expr_defContext
    this.expr1 = null; // Expr_arithmetic_addContext
    return this;
}

Expr_bool_notContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_bool_notContext.prototype.constructor = Expr_bool_notContext;

Expr_bool_notContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_bool_notContext.prototype.expr_arithmetic_add = function() {
    return this.getTypedRuleContext(Expr_arithmetic_addContext,0);
};

Expr_bool_notContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_bool_not(this);
	}
};

Expr_bool_notContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_bool_not(this);
	}
};




BKOOLParser.Expr_bool_notContext = Expr_bool_notContext;

BKOOLParser.prototype.expr_bool_not = function() {

    var localctx = new Expr_bool_notContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BKOOLParser.RULE_expr_bool_not);
    try {
        this.state = 226;
        switch(this._input.LA(1)) {
        case BKOOLParser.T__27:
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.match(BKOOLParser.T__27);
            this.state = 224;
            localctx.expr0 = this.expr_def();
            break;
        case BKOOLParser.T__20:
        case BKOOLParser.T__21:
        case BKOOLParser.T__28:
        case BKOOLParser.T__29:
        case BKOOLParser.T__30:
        case BKOOLParser.BOOL_LIT:
        case BKOOLParser.FLOAT_LIT:
        case BKOOLParser.INT_LIT:
        case BKOOLParser.STR_LIT:
        case BKOOLParser.ID:
        case BKOOLParser.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            localctx.expr1 = this.expr_arithmetic_add();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_arithmetic_addContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_arithmetic_add;
    this.op = null; // Token
    this.expr0 = null; // Expr_defContext
    this.expr1 = null; // Expr_indexContext
    return this;
}

Expr_arithmetic_addContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_arithmetic_addContext.prototype.constructor = Expr_arithmetic_addContext;

Expr_arithmetic_addContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_arithmetic_addContext.prototype.expr_index = function() {
    return this.getTypedRuleContext(Expr_indexContext,0);
};

Expr_arithmetic_addContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_arithmetic_add(this);
	}
};

Expr_arithmetic_addContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_arithmetic_add(this);
	}
};




BKOOLParser.Expr_arithmetic_addContext = Expr_arithmetic_addContext;

BKOOLParser.prototype.expr_arithmetic_add = function() {

    var localctx = new Expr_arithmetic_addContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BKOOLParser.RULE_expr_arithmetic_add);
    var _la = 0; // Token type
    try {
        this.state = 231;
        switch(this._input.LA(1)) {
        case BKOOLParser.T__20:
        case BKOOLParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 228;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BKOOLParser.T__20 || _la===BKOOLParser.T__21)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 229;
            localctx.expr0 = this.expr_def();
            break;
        case BKOOLParser.T__28:
        case BKOOLParser.T__29:
        case BKOOLParser.T__30:
        case BKOOLParser.BOOL_LIT:
        case BKOOLParser.FLOAT_LIT:
        case BKOOLParser.INT_LIT:
        case BKOOLParser.STR_LIT:
        case BKOOLParser.ID:
        case BKOOLParser.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 230;
            localctx.expr1 = this.expr_index();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_indexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_index;
    this.left = null; // Expr_member_accessContext
    this.right = null; // Expr_fragment_indexContext
    return this;
}

Expr_indexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_indexContext.prototype.constructor = Expr_indexContext;

Expr_indexContext.prototype.expr_member_access = function() {
    return this.getTypedRuleContext(Expr_member_accessContext,0);
};

Expr_indexContext.prototype.expr_fragment_index = function() {
    return this.getTypedRuleContext(Expr_fragment_indexContext,0);
};

Expr_indexContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_index(this);
	}
};

Expr_indexContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_index(this);
	}
};




BKOOLParser.Expr_indexContext = Expr_indexContext;

BKOOLParser.prototype.expr_index = function() {

    var localctx = new Expr_indexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BKOOLParser.RULE_expr_index);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        localctx.left = this.expr_member_access();
        this.state = 235;
        _la = this._input.LA(1);
        if(_la===BKOOLParser.T__10) {
            this.state = 234;
            localctx.right = this.expr_fragment_index();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_member_access_paramsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_member_access_params;
    this.e0 = null; // Expr_defContext
    this.e1 = null; // Expr_defContext
    return this;
}

Expr_member_access_paramsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_member_access_paramsContext.prototype.constructor = Expr_member_access_paramsContext;

Expr_member_access_paramsContext.prototype.expr_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_defContext);
    } else {
        return this.getTypedRuleContext(Expr_defContext,i);
    }
};

Expr_member_access_paramsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_member_access_params(this);
	}
};

Expr_member_access_paramsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_member_access_params(this);
	}
};




BKOOLParser.Expr_member_access_paramsContext = Expr_member_access_paramsContext;

BKOOLParser.prototype.expr_member_access_params = function() {

    var localctx = new Expr_member_access_paramsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BKOOLParser.RULE_expr_member_access_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        localctx.e0 = this.expr_def();
        this.state = 242;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BKOOLParser.T__4) {
            this.state = 238;
            this.match(BKOOLParser.T__4);
            this.state = 239;
            localctx.e1 = this.expr_def();
            this.state = 244;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_member_accessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_member_access;
    this.e0 = null; // Expr_object_creationContext
    this.r2 = null; // Expr_fragment_memaccessContext
    return this;
}

Expr_member_accessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_member_accessContext.prototype.constructor = Expr_member_accessContext;

Expr_member_accessContext.prototype.expr_object_creation = function() {
    return this.getTypedRuleContext(Expr_object_creationContext,0);
};

Expr_member_accessContext.prototype.expr_fragment_memaccess = function() {
    return this.getTypedRuleContext(Expr_fragment_memaccessContext,0);
};

Expr_member_accessContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_member_access(this);
	}
};

Expr_member_accessContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_member_access(this);
	}
};




BKOOLParser.Expr_member_accessContext = Expr_member_accessContext;

BKOOLParser.prototype.expr_member_access = function() {

    var localctx = new Expr_member_accessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BKOOLParser.RULE_expr_member_access);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        localctx.e0 = this.expr_object_creation();
        this.state = 247;
        _la = this._input.LA(1);
        if(_la===BKOOLParser.T__31) {
            this.state = 246;
            localctx.r2 = this.expr_fragment_memaccess();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_object_creationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_object_creation;
    this.p = null; // Expr_member_access_paramsContext
    this.e0 = null; // Expr_termContext
    return this;
}

Expr_object_creationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_object_creationContext.prototype.constructor = Expr_object_creationContext;

Expr_object_creationContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Expr_object_creationContext.prototype.expr_member_access_params = function() {
    return this.getTypedRuleContext(Expr_member_access_paramsContext,0);
};

Expr_object_creationContext.prototype.expr_term = function() {
    return this.getTypedRuleContext(Expr_termContext,0);
};

Expr_object_creationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_object_creation(this);
	}
};

Expr_object_creationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_object_creation(this);
	}
};




BKOOLParser.Expr_object_creationContext = Expr_object_creationContext;

BKOOLParser.prototype.expr_object_creation = function() {

    var localctx = new Expr_object_creationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BKOOLParser.RULE_expr_object_creation);
    var _la = 0; // Token type
    try {
        this.state = 257;
        switch(this._input.LA(1)) {
        case BKOOLParser.T__28:
            this.enterOuterAlt(localctx, 1);
            this.state = 249;
            this.match(BKOOLParser.T__28);
            this.state = 250;
            this.match(BKOOLParser.ID);
            this.state = 251;
            this.match(BKOOLParser.LB);
            this.state = 253;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__20) | (1 << BKOOLParser.T__21) | (1 << BKOOLParser.T__27) | (1 << BKOOLParser.T__28) | (1 << BKOOLParser.T__29) | (1 << BKOOLParser.T__30))) !== 0) || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BKOOLParser.BOOL_LIT - 49)) | (1 << (BKOOLParser.FLOAT_LIT - 49)) | (1 << (BKOOLParser.INT_LIT - 49)) | (1 << (BKOOLParser.STR_LIT - 49)) | (1 << (BKOOLParser.ID - 49)) | (1 << (BKOOLParser.LB - 49)))) !== 0)) {
                this.state = 252;
                localctx.p = this.expr_member_access_params();
            }

            this.state = 255;
            this.match(BKOOLParser.RB);
            break;
        case BKOOLParser.T__29:
        case BKOOLParser.T__30:
        case BKOOLParser.BOOL_LIT:
        case BKOOLParser.FLOAT_LIT:
        case BKOOLParser.INT_LIT:
        case BKOOLParser.STR_LIT:
        case BKOOLParser.ID:
        case BKOOLParser.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            localctx.e0 = this.expr_term();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_term;
    this.e0 = null; // Expr_defContext
    this.i = null; // Token
    this.s = null; // Token
    this.b = null; // Token
    this.f = null; // Token
    this.r = null; // Expr_fragment_indexContext
    this.r2 = null; // Expr_fragment_memaccessContext
    return this;
}

Expr_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_termContext.prototype.constructor = Expr_termContext;

Expr_termContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Expr_termContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_termContext.prototype.INT_LIT = function() {
    return this.getToken(BKOOLParser.INT_LIT, 0);
};

Expr_termContext.prototype.STR_LIT = function() {
    return this.getToken(BKOOLParser.STR_LIT, 0);
};

Expr_termContext.prototype.BOOL_LIT = function() {
    return this.getToken(BKOOLParser.BOOL_LIT, 0);
};

Expr_termContext.prototype.FLOAT_LIT = function() {
    return this.getToken(BKOOLParser.FLOAT_LIT, 0);
};

Expr_termContext.prototype.expr_fragment_index = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_fragment_indexContext);
    } else {
        return this.getTypedRuleContext(Expr_fragment_indexContext,i);
    }
};

Expr_termContext.prototype.expr_fragment_memaccess = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_fragment_memaccessContext);
    } else {
        return this.getTypedRuleContext(Expr_fragment_memaccessContext,i);
    }
};

Expr_termContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_term(this);
	}
};

Expr_termContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_term(this);
	}
};




BKOOLParser.Expr_termContext = Expr_termContext;

BKOOLParser.prototype.expr_term = function() {

    var localctx = new Expr_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BKOOLParser.RULE_expr_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        switch(this._input.LA(1)) {
        case BKOOLParser.T__29:
            this.state = 259;
            this.match(BKOOLParser.T__29);
            break;
        case BKOOLParser.LB:
            this.state = 260;
            this.match(BKOOLParser.LB);
            this.state = 261;
            localctx.e0 = this.expr_def();
            this.state = 262;
            this.match(BKOOLParser.RB);
            break;
        case BKOOLParser.ID:
            this.state = 264;
            this.match(BKOOLParser.ID);
            break;
        case BKOOLParser.INT_LIT:
            this.state = 265;
            localctx.i = this.match(BKOOLParser.INT_LIT);
            break;
        case BKOOLParser.STR_LIT:
            this.state = 266;
            localctx.s = this.match(BKOOLParser.STR_LIT);
            break;
        case BKOOLParser.BOOL_LIT:
            this.state = 267;
            localctx.b = this.match(BKOOLParser.BOOL_LIT);
            break;
        case BKOOLParser.FLOAT_LIT:
            this.state = 268;
            localctx.f = this.match(BKOOLParser.FLOAT_LIT);
            break;
        case BKOOLParser.T__30:
            this.state = 269;
            this.match(BKOOLParser.T__30);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 276;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 274;
                switch(this._input.LA(1)) {
                case BKOOLParser.T__10:
                    this.state = 272;
                    localctx.r = this.expr_fragment_index();
                    break;
                case BKOOLParser.T__31:
                    this.state = 273;
                    localctx.r2 = this.expr_fragment_memaccess();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 278;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_fragment_indexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_fragment_index;
    this.e = null; // Expr_defContext
    return this;
}

Expr_fragment_indexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_fragment_indexContext.prototype.constructor = Expr_fragment_indexContext;

Expr_fragment_indexContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Expr_fragment_indexContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_fragment_index(this);
	}
};

Expr_fragment_indexContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_fragment_index(this);
	}
};




BKOOLParser.Expr_fragment_indexContext = Expr_fragment_indexContext;

BKOOLParser.prototype.expr_fragment_index = function() {

    var localctx = new Expr_fragment_indexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BKOOLParser.RULE_expr_fragment_index);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(BKOOLParser.T__10);
        this.state = 280;
        localctx.e = this.expr_def();
        this.state = 281;
        this.match(BKOOLParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_fragment_memaccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_expr_fragment_memaccess;
    this.p = null; // Expr_member_access_paramsContext
    return this;
}

Expr_fragment_memaccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_fragment_memaccessContext.prototype.constructor = Expr_fragment_memaccessContext;

Expr_fragment_memaccessContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Expr_fragment_memaccessContext.prototype.LB = function() {
    return this.getToken(BKOOLParser.LB, 0);
};

Expr_fragment_memaccessContext.prototype.RB = function() {
    return this.getToken(BKOOLParser.RB, 0);
};

Expr_fragment_memaccessContext.prototype.expr_member_access_params = function() {
    return this.getTypedRuleContext(Expr_member_access_paramsContext,0);
};

Expr_fragment_memaccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterExpr_fragment_memaccess(this);
	}
};

Expr_fragment_memaccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitExpr_fragment_memaccess(this);
	}
};




BKOOLParser.Expr_fragment_memaccessContext = Expr_fragment_memaccessContext;

BKOOLParser.prototype.expr_fragment_memaccess = function() {

    var localctx = new Expr_fragment_memaccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BKOOLParser.RULE_expr_fragment_memaccess);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(BKOOLParser.T__31);
        this.state = 284;
        this.match(BKOOLParser.ID);
        this.state = 290;
        _la = this._input.LA(1);
        if(_la===BKOOLParser.LB) {
            this.state = 285;
            this.match(BKOOLParser.LB);
            this.state = 287;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BKOOLParser.T__20) | (1 << BKOOLParser.T__21) | (1 << BKOOLParser.T__27) | (1 << BKOOLParser.T__28) | (1 << BKOOLParser.T__29) | (1 << BKOOLParser.T__30))) !== 0) || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BKOOLParser.BOOL_LIT - 49)) | (1 << (BKOOLParser.FLOAT_LIT - 49)) | (1 << (BKOOLParser.INT_LIT - 49)) | (1 << (BKOOLParser.STR_LIT - 49)) | (1 << (BKOOLParser.ID - 49)) | (1 << (BKOOLParser.LB - 49)))) !== 0)) {
                this.state = 286;
                localctx.p = this.expr_member_access_params();
            }

            this.state = 289;
            this.match(BKOOLParser.RB);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_allContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_all;
    this.s0 = null; // Stmt_blockContext
    this.s1 = null; // Stmt_ifContext
    this.s2 = null; // Stmt_whileContext
    this.s5 = null; // Stmt_assignContext
    this.s6 = null; // Stmt_breakContext
    this.s7 = null; // Stmt_continueContext
    this.s8 = null; // Stmt_returnContext
    this.s9 = null; // Stmt_method_invocationContext
    return this;
}

Stmt_allContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_allContext.prototype.constructor = Stmt_allContext;

Stmt_allContext.prototype.stmt_block = function() {
    return this.getTypedRuleContext(Stmt_blockContext,0);
};

Stmt_allContext.prototype.stmt_if = function() {
    return this.getTypedRuleContext(Stmt_ifContext,0);
};

Stmt_allContext.prototype.stmt_while = function() {
    return this.getTypedRuleContext(Stmt_whileContext,0);
};

Stmt_allContext.prototype.stmt_assign = function() {
    return this.getTypedRuleContext(Stmt_assignContext,0);
};

Stmt_allContext.prototype.stmt_break = function() {
    return this.getTypedRuleContext(Stmt_breakContext,0);
};

Stmt_allContext.prototype.stmt_continue = function() {
    return this.getTypedRuleContext(Stmt_continueContext,0);
};

Stmt_allContext.prototype.stmt_return = function() {
    return this.getTypedRuleContext(Stmt_returnContext,0);
};

Stmt_allContext.prototype.stmt_method_invocation = function() {
    return this.getTypedRuleContext(Stmt_method_invocationContext,0);
};

Stmt_allContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_all(this);
	}
};

Stmt_allContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_all(this);
	}
};




BKOOLParser.Stmt_allContext = Stmt_allContext;

BKOOLParser.prototype.stmt_all = function() {

    var localctx = new Stmt_allContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, BKOOLParser.RULE_stmt_all);
    try {
        this.state = 300;
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            localctx.s0 = this.stmt_block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 293;
            localctx.s1 = this.stmt_if();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 294;
            localctx.s2 = this.stmt_while();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 295;
            localctx.s5 = this.stmt_assign();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 296;
            localctx.s6 = this.stmt_break();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 297;
            localctx.s7 = this.stmt_continue();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 298;
            localctx.s8 = this.stmt_return();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 299;
            localctx.s9 = this.stmt_method_invocation();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_block;
    this.c = null; // Class_attrContext
    this.s = null; // Stmt_allContext
    return this;
}

Stmt_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_blockContext.prototype.constructor = Stmt_blockContext;

Stmt_blockContext.prototype.LP = function() {
    return this.getToken(BKOOLParser.LP, 0);
};

Stmt_blockContext.prototype.RP = function() {
    return this.getToken(BKOOLParser.RP, 0);
};

Stmt_blockContext.prototype.stmt_all = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stmt_allContext);
    } else {
        return this.getTypedRuleContext(Stmt_allContext,i);
    }
};

Stmt_blockContext.prototype.class_attr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Class_attrContext);
    } else {
        return this.getTypedRuleContext(Class_attrContext,i);
    }
};

Stmt_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_block(this);
	}
};

Stmt_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_block(this);
	}
};




BKOOLParser.Stmt_blockContext = Stmt_blockContext;

BKOOLParser.prototype.stmt_block = function() {

    var localctx = new Stmt_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, BKOOLParser.RULE_stmt_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(BKOOLParser.LP);
        this.state = 308;
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        if(la_===1) {
            this.state = 304; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 303;
            		localctx.c = this.class_attr();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 306; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

        }
        this.state = 313;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (BKOOLParser.T__28 - 29)) | (1 << (BKOOLParser.T__29 - 29)) | (1 << (BKOOLParser.T__30 - 29)) | (1 << (BKOOLParser.T__32 - 29)) | (1 << (BKOOLParser.T__35 - 29)) | (1 << (BKOOLParser.T__38 - 29)) | (1 << (BKOOLParser.T__39 - 29)) | (1 << (BKOOLParser.T__40 - 29)) | (1 << (BKOOLParser.BOOL_LIT - 29)) | (1 << (BKOOLParser.FLOAT_LIT - 29)) | (1 << (BKOOLParser.INT_LIT - 29)) | (1 << (BKOOLParser.STR_LIT - 29)) | (1 << (BKOOLParser.ID - 29)) | (1 << (BKOOLParser.LP - 29)) | (1 << (BKOOLParser.LB - 29)))) !== 0)) {
            this.state = 310;
            localctx.s = this.stmt_all();
            this.state = 315;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 316;
        this.match(BKOOLParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_ifContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_if;
    this.conditional = null; // Expr_defContext
    this.thenStmt = null; // Stmt_allContext
    this.elseStmt = null; // Stmt_allContext
    return this;
}

Stmt_ifContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_ifContext.prototype.constructor = Stmt_ifContext;

Stmt_ifContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Stmt_ifContext.prototype.stmt_all = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stmt_allContext);
    } else {
        return this.getTypedRuleContext(Stmt_allContext,i);
    }
};

Stmt_ifContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_if(this);
	}
};

Stmt_ifContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_if(this);
	}
};




BKOOLParser.Stmt_ifContext = Stmt_ifContext;

BKOOLParser.prototype.stmt_if = function() {

    var localctx = new Stmt_ifContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, BKOOLParser.RULE_stmt_if);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(BKOOLParser.T__32);
        this.state = 319;
        localctx.conditional = this.expr_def();
        this.state = 320;
        this.match(BKOOLParser.T__33);
        this.state = 321;
        localctx.thenStmt = this.stmt_all();
        this.state = 324;
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 322;
            this.match(BKOOLParser.T__34);
            this.state = 323;
            localctx.elseStmt = this.stmt_all();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_whileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_while;
    this.conditional = null; // Expr_defContext
    this.loopStmt = null; // Stmt_allContext
    return this;
}

Stmt_whileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_whileContext.prototype.constructor = Stmt_whileContext;

Stmt_whileContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Stmt_whileContext.prototype.stmt_all = function() {
    return this.getTypedRuleContext(Stmt_allContext,0);
};

Stmt_whileContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_while(this);
	}
};

Stmt_whileContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_while(this);
	}
};




BKOOLParser.Stmt_whileContext = Stmt_whileContext;

BKOOLParser.prototype.stmt_while = function() {

    var localctx = new Stmt_whileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, BKOOLParser.RULE_stmt_while);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.match(BKOOLParser.T__35);
        this.state = 327;
        localctx.conditional = this.expr_def();
        this.state = 328;
        this.match(BKOOLParser.T__36);
        this.state = 329;
        localctx.loopStmt = this.stmt_all();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_assignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_assign;
    this.left = null; // Stmt_lefthandContext
    this.right = null; // Expr_defContext
    return this;
}

Stmt_assignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_assignContext.prototype.constructor = Stmt_assignContext;

Stmt_assignContext.prototype.stmt_lefthand = function() {
    return this.getTypedRuleContext(Stmt_lefthandContext,0);
};

Stmt_assignContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Stmt_assignContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_assign(this);
	}
};

Stmt_assignContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_assign(this);
	}
};




BKOOLParser.Stmt_assignContext = Stmt_assignContext;

BKOOLParser.prototype.stmt_assign = function() {

    var localctx = new Stmt_assignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, BKOOLParser.RULE_stmt_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 331;
        localctx.left = this.stmt_lefthand();
        this.state = 332;
        this.match(BKOOLParser.T__37);
        this.state = 333;
        localctx.right = this.expr_def();
        this.state = 334;
        this.match(BKOOLParser.DELI_SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_lefthandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_lefthand;
    this.e0 = null; // Expr_member_accessContext
    this.e1 = null; // Expr_defContext
    this.e2 = null; // Expr_object_creationContext
    this.e3 = null; // Token
    return this;
}

Stmt_lefthandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_lefthandContext.prototype.constructor = Stmt_lefthandContext;

Stmt_lefthandContext.prototype.expr_member_access = function() {
    return this.getTypedRuleContext(Expr_member_accessContext,0);
};

Stmt_lefthandContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Stmt_lefthandContext.prototype.expr_object_creation = function() {
    return this.getTypedRuleContext(Expr_object_creationContext,0);
};

Stmt_lefthandContext.prototype.ID = function() {
    return this.getToken(BKOOLParser.ID, 0);
};

Stmt_lefthandContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_lefthand(this);
	}
};

Stmt_lefthandContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_lefthand(this);
	}
};




BKOOLParser.Stmt_lefthandContext = Stmt_lefthandContext;

BKOOLParser.prototype.stmt_lefthand = function() {

    var localctx = new Stmt_lefthandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, BKOOLParser.RULE_stmt_lefthand);
    try {
        this.state = 346;
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 336;
            localctx.e0 = this.expr_member_access();
            this.state = 337;
            this.match(BKOOLParser.T__10);
            this.state = 338;
            localctx.e1 = this.expr_def();
            this.state = 339;
            this.match(BKOOLParser.T__11);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 341;
            localctx.e2 = this.expr_object_creation();

            this.state = 342;
            this.match(BKOOLParser.T__31);
            this.state = 343;
            localctx.e3 = this.match(BKOOLParser.ID);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 345;
            this.match(BKOOLParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_breakContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_break;
    return this;
}

Stmt_breakContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_breakContext.prototype.constructor = Stmt_breakContext;


Stmt_breakContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_break(this);
	}
};

Stmt_breakContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_break(this);
	}
};




BKOOLParser.Stmt_breakContext = Stmt_breakContext;

BKOOLParser.prototype.stmt_break = function() {

    var localctx = new Stmt_breakContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, BKOOLParser.RULE_stmt_break);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(BKOOLParser.T__38);
        this.state = 349;
        this.match(BKOOLParser.DELI_SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_continueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_continue;
    return this;
}

Stmt_continueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_continueContext.prototype.constructor = Stmt_continueContext;


Stmt_continueContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_continue(this);
	}
};

Stmt_continueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_continue(this);
	}
};




BKOOLParser.Stmt_continueContext = Stmt_continueContext;

BKOOLParser.prototype.stmt_continue = function() {

    var localctx = new Stmt_continueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, BKOOLParser.RULE_stmt_continue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351;
        this.match(BKOOLParser.T__39);
        this.state = 352;
        this.match(BKOOLParser.DELI_SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_returnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_return;
    this.e = null; // Expr_defContext
    return this;
}

Stmt_returnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_returnContext.prototype.constructor = Stmt_returnContext;

Stmt_returnContext.prototype.expr_def = function() {
    return this.getTypedRuleContext(Expr_defContext,0);
};

Stmt_returnContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_return(this);
	}
};

Stmt_returnContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_return(this);
	}
};




BKOOLParser.Stmt_returnContext = Stmt_returnContext;

BKOOLParser.prototype.stmt_return = function() {

    var localctx = new Stmt_returnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, BKOOLParser.RULE_stmt_return);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.match(BKOOLParser.T__40);
        this.state = 355;
        localctx.e = this.expr_def();
        this.state = 356;
        this.match(BKOOLParser.DELI_SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Stmt_method_invocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BKOOLParser.RULE_stmt_method_invocation;
    this.expr = null; // Expr_member_accessContext
    return this;
}

Stmt_method_invocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stmt_method_invocationContext.prototype.constructor = Stmt_method_invocationContext;

Stmt_method_invocationContext.prototype.expr_member_access = function() {
    return this.getTypedRuleContext(Expr_member_accessContext,0);
};

Stmt_method_invocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.enterStmt_method_invocation(this);
	}
};

Stmt_method_invocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BKOOLListener ) {
        listener.exitStmt_method_invocation(this);
	}
};




BKOOLParser.Stmt_method_invocationContext = Stmt_method_invocationContext;

BKOOLParser.prototype.stmt_method_invocation = function() {

    var localctx = new Stmt_method_invocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, BKOOLParser.RULE_stmt_method_invocation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        localctx.expr = this.expr_member_access();
        this.state = 359;
        this.match(BKOOLParser.DELI_SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.BKOOLParser = BKOOLParser;
