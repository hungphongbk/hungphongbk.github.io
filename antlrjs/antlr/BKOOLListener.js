// Generated from BKOOL.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BKOOLParser.
function BKOOLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BKOOLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BKOOLListener.prototype.constructor = BKOOLListener;

// Enter a parse tree produced by BKOOLParser#program.
BKOOLListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#program.
BKOOLListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#class_def.
BKOOLListener.prototype.enterClass_def = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#class_def.
BKOOLListener.prototype.exitClass_def = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#class_memlist.
BKOOLListener.prototype.enterClass_memlist = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#class_memlist.
BKOOLListener.prototype.exitClass_memlist = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#class_attr.
BKOOLListener.prototype.enterClass_attr = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#class_attr.
BKOOLListener.prototype.exitClass_attr = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#class_attr_nonstatic.
BKOOLListener.prototype.enterClass_attr_nonstatic = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#class_attr_nonstatic.
BKOOLListener.prototype.exitClass_attr_nonstatic = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#class_attr_types.
BKOOLListener.prototype.enterClass_attr_types = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#class_attr_types.
BKOOLListener.prototype.exitClass_attr_types = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#decl_const.
BKOOLListener.prototype.enterDecl_const = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#decl_const.
BKOOLListener.prototype.exitDecl_const = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#decl_var.
BKOOLListener.prototype.enterDecl_var = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#decl_var.
BKOOLListener.prototype.exitDecl_var = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#id_list.
BKOOLListener.prototype.enterId_list = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#id_list.
BKOOLListener.prototype.exitId_list = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#decl_method.
BKOOLListener.prototype.enterDecl_method = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#decl_method.
BKOOLListener.prototype.exitDecl_method = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#param_list.
BKOOLListener.prototype.enterParam_list = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#param_list.
BKOOLListener.prototype.exitParam_list = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#type_all.
BKOOLListener.prototype.enterType_all = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#type_all.
BKOOLListener.prototype.exitType_all = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#type_primitives.
BKOOLListener.prototype.enterType_primitives = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#type_primitives.
BKOOLListener.prototype.exitType_primitives = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#type_void.
BKOOLListener.prototype.enterType_void = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#type_void.
BKOOLListener.prototype.exitType_void = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#type_array.
BKOOLListener.prototype.enterType_array = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#type_array.
BKOOLListener.prototype.exitType_array = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#type_array_elem.
BKOOLListener.prototype.enterType_array_elem = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#type_array_elem.
BKOOLListener.prototype.exitType_array_elem = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#type_class.
BKOOLListener.prototype.enterType_class = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#type_class.
BKOOLListener.prototype.exitType_class = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_def.
BKOOLListener.prototype.enterExpr_def = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_def.
BKOOLListener.prototype.exitExpr_def = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_relational.
BKOOLListener.prototype.enterExpr_relational = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_relational.
BKOOLListener.prototype.exitExpr_relational = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_bool.
BKOOLListener.prototype.enterExpr_bool = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_bool.
BKOOLListener.prototype.exitExpr_bool = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_arithmetic_addbin.
BKOOLListener.prototype.enterExpr_arithmetic_addbin = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_arithmetic_addbin.
BKOOLListener.prototype.exitExpr_arithmetic_addbin = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_arithmetic_mulbin.
BKOOLListener.prototype.enterExpr_arithmetic_mulbin = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_arithmetic_mulbin.
BKOOLListener.prototype.exitExpr_arithmetic_mulbin = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_string.
BKOOLListener.prototype.enterExpr_string = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_string.
BKOOLListener.prototype.exitExpr_string = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_bool_not.
BKOOLListener.prototype.enterExpr_bool_not = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_bool_not.
BKOOLListener.prototype.exitExpr_bool_not = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_arithmetic_add.
BKOOLListener.prototype.enterExpr_arithmetic_add = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_arithmetic_add.
BKOOLListener.prototype.exitExpr_arithmetic_add = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_index.
BKOOLListener.prototype.enterExpr_index = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_index.
BKOOLListener.prototype.exitExpr_index = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_member_access_params.
BKOOLListener.prototype.enterExpr_member_access_params = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_member_access_params.
BKOOLListener.prototype.exitExpr_member_access_params = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_member_access.
BKOOLListener.prototype.enterExpr_member_access = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_member_access.
BKOOLListener.prototype.exitExpr_member_access = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_object_creation.
BKOOLListener.prototype.enterExpr_object_creation = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_object_creation.
BKOOLListener.prototype.exitExpr_object_creation = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_term.
BKOOLListener.prototype.enterExpr_term = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_term.
BKOOLListener.prototype.exitExpr_term = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_fragment_index.
BKOOLListener.prototype.enterExpr_fragment_index = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_fragment_index.
BKOOLListener.prototype.exitExpr_fragment_index = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#expr_fragment_memaccess.
BKOOLListener.prototype.enterExpr_fragment_memaccess = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#expr_fragment_memaccess.
BKOOLListener.prototype.exitExpr_fragment_memaccess = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_all.
BKOOLListener.prototype.enterStmt_all = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_all.
BKOOLListener.prototype.exitStmt_all = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_block.
BKOOLListener.prototype.enterStmt_block = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_block.
BKOOLListener.prototype.exitStmt_block = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_if.
BKOOLListener.prototype.enterStmt_if = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_if.
BKOOLListener.prototype.exitStmt_if = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_while.
BKOOLListener.prototype.enterStmt_while = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_while.
BKOOLListener.prototype.exitStmt_while = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_assign.
BKOOLListener.prototype.enterStmt_assign = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_assign.
BKOOLListener.prototype.exitStmt_assign = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_lefthand.
BKOOLListener.prototype.enterStmt_lefthand = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_lefthand.
BKOOLListener.prototype.exitStmt_lefthand = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_break.
BKOOLListener.prototype.enterStmt_break = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_break.
BKOOLListener.prototype.exitStmt_break = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_continue.
BKOOLListener.prototype.enterStmt_continue = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_continue.
BKOOLListener.prototype.exitStmt_continue = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_return.
BKOOLListener.prototype.enterStmt_return = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_return.
BKOOLListener.prototype.exitStmt_return = function(ctx) {
};


// Enter a parse tree produced by BKOOLParser#stmt_method_invocation.
BKOOLListener.prototype.enterStmt_method_invocation = function(ctx) {
};

// Exit a parse tree produced by BKOOLParser#stmt_method_invocation.
BKOOLListener.prototype.exitStmt_method_invocation = function(ctx) {
};



exports.BKOOLListener = BKOOLListener;