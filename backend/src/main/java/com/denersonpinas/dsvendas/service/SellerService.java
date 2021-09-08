package com.denersonpinas.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denersonpinas.dsvendas.dto.SellerDTO;
import com.denersonpinas.dsvendas.entities.Seller;
import com.denersonpinas.dsvendas.repositories.SellerRepository;

@Service // Isso possibilita a utilização dessa class em outras partes do nosso projeto
public class SellerService {
	
	@Autowired // Faz com que as instancia seja ejetada automaticamente pelo framework
	private SellerRepository repository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}	
}
