<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Adjust extends CI_Controller{
    function __construct(){
        parent::__construct();
        $this->check_isvalidated();
    }
    
    public function index($msg = NULL){
        // Load our view to be displayed
        // to the user
        $data['msg'] = $msg;
        $this->load->view('adjust_view', $data);
    }
    
    public function process(){
        $this->load->model('adjust_model');
        $result = $this->adjust_model->saveData();
        redirect('home');
    }
    
    private function check_isvalidated(){
        if(! $this->session->userdata('validated')){
            redirect('login');
        }
    }
}