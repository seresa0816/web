<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Author: 
 * Description: Home model class
 */
class Home_model extends CI_Model{
    function __construct(){
        parent::__construct();
    }
    
    public function getData(){
        $name = $this->session->userdata('username');
        $this->db->where('name', $name);
        $query = $this->db->get('tb_product');
        $products = array();
        foreach ($query->result_array() as $product){
            if (!isset($products[$product['thumbnail']]))
            {
                $products[$product['thumbnail']] = array();
            }
            $products[$product['thumbnail']][] = $product;
        }
        return $products;
    }

    public function saveData($products){
        $name = $this->session->userdata('username');
        for ($i = 0; $i < count($products); $i ++){           
            $data = array(
                'name' => $name ,
                'thumbnail' => $products[$i]['thumbnail'] ,
                'filedir' => $products[$i]['filename'] ,
                'modeltype' => $products[$i]['modeltype'] ,
            );
            $this->db->insert('tb_product', $data); 
        }
    }
}
?>