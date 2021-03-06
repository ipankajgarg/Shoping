 <?php
 

 
class DB_Functions {
 
    private $conn;
 
    // constructor
    function __construct() {
        require_once 'DB_Connect.php';
        // connecting to database
        $db = new Db_Connect();
        $this->conn = $db->connect();
    }
 
    // destructor
    function __destruct() {
         
    }
 
    /**
     * Storing new user
     * returns user details
     */
    public function storeUser($storename,$storeaddress,$firstname,$lastname,$mobilenumber,$email,$password) {
        $uuid = uniqid('', true);
        $hash = $this->hashSSHA($password);
        $encrypted_password = $hash["encrypted"]; // encrypted password
        $salt = $hash["salt"]; // salt
 
        $stmt = $this->conn->prepare("INSERT INTO partners(unique_id,storename,storeaddress,firstname,lastname,email,encrypted_password,mobilenumber,salt, created_at) VALUES(?,?,?,?,?,?,?,?,?,NOW())");
        $stmt->bind_param("sssssssss",$uuid,$storename,$storeaddress,$firstname,$lastname,$email,$encrypted_password,$mobilenumber,$salt);
        $result = $stmt->execute();
        $stmt->close();
 
        // check for successful store
        if ($result) {
            $stmt = $this->conn->prepare("SELECT * FROM partners WHERE mobilenumber = ?");
            $stmt->bind_param("s", $mobilenumber);
            $stmt->execute();
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            return $user;
        } else {
            return false;
        }
    }
 
    /**
     * Get user by email and password
     */
    public function getUserByEmailAndPassword($mobilenumber,$password) {
 
        $stmt = $this->conn->prepare("SELECT * FROM partners WHERE mobilenumber = ?");
 
        $stmt->bind_param("s", $mobilenumber);
 
        if ($stmt->execute()) {
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            // verifying user password
            $salt = $user['salt'];
            $encrypted_password = $user['encrypted_password'];
            $hash = $this->checkhashSSHA($salt, $password);
            // check for password equality
            if ($encrypted_password == $hash) {
                // user authentication details are correct
                return $user;
                header("Location:logindashboard.php");
}
            
            if($row=mysqli_fetch_array($stmt)){
                $SESSION['user_id']= $row['id'];
                $SESSION['user_name']=$row['name'];
                header("Location:logindashboard.php");
            }
        }
        else {
            return NULL;
        }
    }
 
    /**
     * Check user is existed or not
     */
    public function isUserExisted($mobilenumber) {
        $stmt = $this->conn->prepare("SELECT mobilenumber from partners WHERE mobilenumber = ?");
 
        $stmt->bind_param("s", $mobilenumber);
 
        $stmt->execute();
 
        $stmt->store_result();
 
        if ($stmt->num_rows > 0) {
            // user existed 
            $stmt->close();
            return true;
        } else {
            // user not existed
            $stmt->close();
            return false;
        }
    }
 
    /**
     * Encrypting password
     * @param password
     * returns salt and encrypted password
     */
    public function hashSSHA($password) {
 
        $salt = sha1(rand());
        $salt = substr($salt, 0, 10);
        $encrypted = base64_encode(sha1($password . $salt, true) . $salt);
        $hash = array("salt" => $salt, "encrypted" => $encrypted);
        return $hash;
    }
 
    /**
     * Decrypting password
     * @param salt, password
     * returns hash string
     */
    public function checkhashSSHA($salt, $password) {
 
        $hash = base64_encode(sha1($password . $salt, true) . $salt);
 
        return $hash;
    }
 
}
 
?>