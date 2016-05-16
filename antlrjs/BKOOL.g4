/**
 * Student name: Truong Hung Phong
 * Student ID: 51202744
 */
grammar BKOOL;

options {
    language=JavaScript;
}

program
    : (class_def)+ EOF
    ;

// PARSER

class_def
    :
    'class' className=ID
    ('extends' superClass=ID)?
    LP (class_memlist)? RP
    ;
class_memlist
    :
    (
        class_attr
        | decl_method
    )+ ;
class_attr
    : (KW_STATIC)? decl=class_attr_nonstatic
    ;
class_attr_nonstatic
    : ( attrConst=decl_const
    | attrVars=decl_var
    ) ';' ;
class_attr_types
    : ( t0=type_array 
    | t1=type_primitives 
    | t2=type_class ) ;

//---------------------------------- DECLARE ----------------------------------

decl_const
    : KW_FINAL constType=class_attr_types id=ID '=' expr=expr_def ;
decl_var
    : idlist=id_list ':' varType=class_attr_types ;
id_list
    : ID (',' ID)* ;
decl_method
    : ( methodName=ID LB paramlist=param_list? RB block=stmt_block )
    | ( methodType=type_all (methodStatic=KW_STATIC)? methodName=ID LB paramlist=param_list? RB block=stmt_block ) ;
param_list
    : vars+=decl_var (';' vars+=decl_var)* ;


//---------------------------------- TYPE ----------------------------------
type_all
    : t0=type_primitives   
    | t1=type_array        
    | t2=type_class        
    | t3=type_void        
    ;
type_primitives
    : 'integer'     
    | 'bool'        
    | 'float'       
    | 'string'      
    ;
type_void
    : 'void' ;
type_array
    : elem=type_array_elem 
    '[' size=INT_LIT  ']' ;
type_array_elem
    
    : typePrimitives=type_primitives 
    | typeClass=type_class  ;
// type_array_size : INT_LIT | STR_LIT | BOOL_LIT | FLOAT_LIT | ID ;
type_class
    : ID 
    ;

//---------------------------------- EXPRESSIONS ----------------------------------
expr_def
    : left=expr_relational ( op=( '>' | '<' | '>=' | '<=' ) right=expr_def)? ;
expr_relational 
    : left=expr_bool ( op=( '==' | '<>' ) right=expr_def)? ;
expr_bool
    : left=expr_arithmetic_addbin ( op=( '&&' | '||' ) right=expr_def)? ;
expr_arithmetic_addbin  
    : <assoc=right> left=expr_arithmetic_mulbin ( op=( '+' | '-' ) right=expr_def)? ;
expr_arithmetic_mulbin
    : left=expr_string ( op=( '*' | '\\' | '/' | '%' ) right=expr_def)? ;
expr_string
    : left=expr_bool_not ( op='^' right=expr_def)? ;
expr_bool_not
    : '!' expr0=expr_def 
    | expr1=expr_arithmetic_add  ;
expr_arithmetic_add
    : <assoc=right> op=( '+' | '-' ) expr0=expr_def 
    | expr1=expr_index  ;
expr_index 
    : left=expr_member_access  (right=expr_fragment_index  )? ;
expr_member_access_params
    : ( e0=expr_def  (',' e1=expr_def  )* ) ;
// FIELD ACCESS / CALL EXPR
expr_member_access
    : e0=expr_object_creation 
    (r2=expr_fragment_memaccess )? ;
expr_object_creation
    : ( 'new' ID
        '(' (p=expr_member_access_params)? ')'
    ) 
    | e0=expr_term  ;
expr_term
    :
    (
        'self' 
        | '(' e0=expr_def  ')'
        //| expr_object_creation
        | ID 
        | i=INT_LIT 
        | s=STR_LIT 
        | b=BOOL_LIT 
        | f=FLOAT_LIT 
        | 'null' 
    )
    (
        r=expr_fragment_index
        | r2=expr_fragment_memaccess 
    )* ;
expr_fragment_index
    : '[' e=expr_def  ']'
    ;
expr_fragment_memaccess
    : '.' ID
    (LB
    (p=expr_member_access_params )? RB)?
    ;

//---------------------------------- STATEMENTS ----------------------------------
stmt_all
    : s0=stmt_block        
    | s1=stmt_if           
    | s2=stmt_while        
    | s5=stmt_assign       
    | s6=stmt_break        
    | s7=stmt_continue     
    | s8=stmt_return       
    | s9=stmt_method_invocation        
    ;
stmt_block
    : LP ((c=class_attr )+)?
    (s=stmt_all )* RP;
stmt_if
    : 'if' conditional=expr_def
    'then' thenStmt=stmt_all
    ('else' elseStmt=stmt_all )?
    ;
stmt_while
    : 'while' conditional=expr_def 'do' loopStmt=stmt_all ;
stmt_assign
    : left=stmt_lefthand ':=' right=expr_def ';' ;
stmt_lefthand
    : e0=expr_member_access '[' e1=expr_def ']'
    | e2=expr_object_creation ('.' e3=ID)
    | ID  ;
stmt_break
    : 'break' ';' ;
stmt_continue
    : 'continue' ';' ;
stmt_return
    : 'return' e=expr_def ';' ;
stmt_method_invocation
    : expr=expr_member_access  ';' ;

//---------------------------------- PARSER PRIMITIVES ----------------------------------

// LEXER
KW : ('bool'| 'break'| 'class'| 'continue'| 'do'| 'else'|
	'extends'| 'float' | 'if'| 'integer'| 'new'|
	'string'| 'then'| 'while'| 'return' | 'void'| 'null'| 'self');
KW_STATIC : 'static' ;
KW_FINAL : 'final' ;

OP : ('+'|'-'|'*'|'/'|'\\'|'%'|'<>'|'=='|'<'|'>'|
	'<='|'>='|'||'|'&&'|'!'|'^'|'new');
OP2 : (':='|'=');

DELI_SEMI : ';' ;
DELI : (':'|'['|']'|'.'|',');

// data types

BOOL_LIT : ( 'true' | 'false' );
FLOAT_LIT : [0-9]+((('.'?([0-9]+)?(('e'|'E')('-'|'+')?[0-9]+))|('.'([0-9]+)))|'.');
INT_LIT : [0-9]+;
STR_LIT :
    '"'(~('"'|'\\'|'\r'|'\n')|'\\'( ESCAPE | (. )))*
    ('"'|
    );

ID : [a-zA-Z_][a-zA-Z0-9_]* ;             // match lower-case identifiers

LP : '{';
RP : '}';
LB : '(';
RB : ')';

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines

LINE_CMT : '#'(~('\r'|'\n'))*  -> skip;
BLOCK_CMT : '(*' (.)*? '*)' -> skip;

OTHER : . ;

fragment ESCAPE : 'b'|'f'|'r'|'n'|'t'|'"'|'\\';