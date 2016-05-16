<?php

/**
 * Created by PhpStorm.
 * User: hungphongbk
 * Date: 11/4/15
 * Time: 4:31 PM
 */
class ControllerModuleRightSidebar extends Controller
{
    protected $view='/template/module/right_sidebar.tpl';

    public function index()
    {
        $this->load->language('module/right_sidebar');
        $lang = $this->language;

        $this->document->setTitle($lang->get('heading_title'));

        $data['heading_title'] = $lang->get('heading_title');
        $data['attention_title'] = $lang->get('attention_title');

        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . $this->view)) {
            return $this->load->view($this->config->get('config_template') . $this->view, $data);
        } else {
            return $this->load->view('default' . $this->view, $data);
        }
    }
}