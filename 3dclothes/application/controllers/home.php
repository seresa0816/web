<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Author: Jorge Torres
 * Description: Home controller class
 * This is only viewable to those members that are logged in
 */
 class Home extends CI_Controller{
    function __construct(){
        parent::__construct();
        $this->check_isvalidated();
    }
    
    public function index(){
        $this->load->model('home_model');
        $result = $this->home_model->getData();
        $data['data'] = $result;
        $data['userdata'] = $this->session->userdata();
        $this->load->view('home_view', $data);
    }

    public function uploadData(){
        $name = $this->session->userdata('username');
        $thumbnail = $this->security->xss_clean($this->input->post('thumbnail'));
        $modeltype = $this->security->xss_clean($this->input->post('modeltype'));

        $uploadPath = "uploaded";
        if(!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, TRUE);
        }

        $uploadPath = $uploadPath . "/" . $name;
        if(!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, TRUE);
        }

        $uploadPath = $uploadPath . "/" . $thumbnail;
        if(!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, TRUE);
        }

        $uploadPath = $uploadPath . "/" . $modeltype;

        if(!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, TRUE);
        }

        $products = array();

        if (isset($_FILES['files']) && !empty($_FILES['files'])) {
            $no_files = count($_FILES["files"]['name']);
            for ($i = 0; $i < $no_files; $i++) {
                if ($_FILES["files"]["error"][$i] > 0) {
                    echo "Error: " . $_FILES["files"]["error"][$i] . "<br>";
                } else {
                    if (file_exists($uploadPath.'/' . $_FILES["files"]["name"][$i])) {
                        echo 'File already exists : uploads/' . $_FILES["files"]["name"][$i];
                        return;
                    } else {
                        move_uploaded_file($_FILES["files"]["tmp_name"][$i], $uploadPath.'/' . $_FILES["files"]["name"][$i]);

                        $products[] = array(
                            'thumbnail' => $thumbnail,
                            'modeltype' => $modeltype,
                            'filename' => $_FILES["files"]["name"][$i]
                        );
                        // echo 'File successfully uploaded : uploads/' . $_FILES['files']['name'][$i] . ' ';
                    }
                }
            }
        } else {
            echo 'Please choose at least one file';
            return;
        }
        
        $this->load->model('home_model');
     
        $result = $this->home_model->saveData($products);
        echo 'success';
    }
    
    private function check_isvalidated(){
        if(! $this->session->userdata('validated')){
            redirect('login');
        }
    }
 }
 ?>