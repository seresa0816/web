<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Author: 
 * Description: Adjust model class
 */
class Adjust_model extends CI_Model{
    function __construct(){
        parent::__construct();
    }
    
    public function saveData(){
        // grab user input
        $name = $this->session->userdata('username');
        $height = $this->security->xss_clean($this->input->post('height'));
        $weight = $this->security->xss_clean($this->input->post('weight'));
        $chest = $this->security->xss_clean($this->input->post('chest'));
        $waist = $this->security->xss_clean($this->input->post('waist'));
        $hips = $this->security->xss_clean($this->input->post('hips'));
        $skincolor = $this->security->xss_clean($this->input->post('skincolor'));
        
        $data = array(
            'height' => $height ,
            'weight' => $weight ,
            'chest' => $chest,
            'waist' => $waist,
            'hips' => $hips,
            'skincolor' => $skincolor
        );
        $this->db->where('name', $name);

        $this->db->update('tb_user', $data); 
        return true;
    }

    public function signupvalidate(){
        // grab user input
        $name = $this->security->xss_clean($this->input->post('name'));
        $email = $this->security->xss_clean($this->input->post('email'));
        $password = $this->security->xss_clean($this->input->post('password'));
        $confirm = $this->security->xss_clean($this->input->post('confirm'));
        
        if ($name == "" || $email == "" || $password == "" || $confirm == "") {
            return "please fill all the fields.";
        }

        if ($password != $confirm) {
            return "the cofirm password is not the same as the password.";
        }

        // Prep the query
        $this->db->where('name', $name);
        
        // Run the query
        $query = $this->db->get('tb_user');
        // Let's check if there are any results
        if($query->num_rows() == 1)
        {
            return $name." is already registed.";
        }
        
        $data = array(
            'name' => $name ,
            'email' => $email ,
            'password' => $password
        );

        $this->db->insert('tb_user', $data); 

        return "";
    }
}
?>