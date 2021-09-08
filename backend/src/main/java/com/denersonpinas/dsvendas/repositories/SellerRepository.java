package com.denersonpinas.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.denersonpinas.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
