

package com.mare.api.repository;

import com.mare.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
