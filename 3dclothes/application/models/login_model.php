<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Author: 
 * Description: Login model class
 */
class Login_model extends CI_Model{
    function __construct(){
        parent::__construct();
    }
    
    public function validate(){
        // grab user input
        $username = $this->security->xss_clean($this->input->post('username'));
        $password = $this->security->xss_clean($this->input->post('password'));
        
        // Prep the query
        $this->db->where('name', $username);
        $this->db->where('password', $password);
        
        // Run the query
        $query = $this->db->get('tb_user');
        // Let's check if there are any results
        if($query->num_rows() == 1)
        {
            // If there is a user, then create session data
            $row = $query->row();
            $data = array(
                    // 'userid' => $row->userid,
                    // 'fname' => $row->fname,
                    // 'lname' => $row->lname,
                    'username' => $row->name,
                    'email' => $row->email,
                    'height' => $row->height,
                    'weight' => $row->weight,
                    'chest' => $row->chest,
                    'waist' => $row->waist,
                    'hips' => $row->hips,
                    'skincolor' => $row->skincolor,
                    'validated' => true
                    );
            $this->session->set_userdata($data);
            return true;
        }
        // If the previous process did not validate
        // then return false.
        return false;
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