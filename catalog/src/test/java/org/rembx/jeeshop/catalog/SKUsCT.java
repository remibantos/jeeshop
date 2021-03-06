package org.rembx.jeeshop.catalog;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.rembx.jeeshop.catalog.model.Discount;
import org.rembx.jeeshop.catalog.model.SKU;
import org.rembx.jeeshop.catalog.test.CatalogItemCRUDTester;
import org.rembx.jeeshop.catalog.test.TestCatalog;
import org.rembx.jeeshop.rest.WebApplicationException;

import javax.ws.rs.core.Response;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.fail;
import static org.rembx.jeeshop.catalog.test.Assertions.assertThat;
import static org.rembx.jeeshop.catalog.test.Assertions.assertThatDiscountsOf;

public class SKUsCT {

    private SKUs localService;
    private CatalogItemCRUDTester<SKU> tester;

    @BeforeEach
    public void setup() {
        tester = new CatalogItemCRUDTester<>(SKU.class);
        localService = new SKUs(tester.getEntityManager(), new CatalogItemFinder(tester.getEntityManager()), null);
        tester.setService(this.localService);
    }

    @Test
    public void find_withIdOfVisibleSKU_ShouldReturnExpectedSKU() {
        SKU catalogItem = localService.find(tester.getSecurityContext(), tester.getFixtures().aVisibleSKU().getId(), null);
        assertThat(catalogItem).isEqualTo(tester.getFixtures().aVisibleSKU());
        assertThat(catalogItem.isVisible()).isTrue();
    }

    @Test
    public void find_withIdOfDisableSKU_ShouldThrowForbiddenException() {
        try {
            localService.find(tester.getSecurityContext(), tester.getFixtures().aDisabledSKU().getId(), null);
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.FORBIDDEN);
        }
    }

    @Test
    public void find_withIdOfUnAvailableSKU_ShouldReturnUnAvailableSKU() {
        assertThat(localService.find(tester.getSecurityContext(), tester.getFixtures().aSKUNotAvailable().getId(), null)).isEqualTo(tester.getFixtures().aSKUNotAvailable());
        assertThat(localService.find(tester.getSecurityContext(), tester.getFixtures().aSKUNotAvailable().getId(), null).isAvailable()).isFalse();

    }

    @Test
    public void find_withIdOfExpiredSKU_ShouldThrowForbiddenException() {
        try {
            localService.find(tester.getSecurityContext(), tester.getFixtures().anExpiredSKU().getId(), null);
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.FORBIDDEN);
        }
    }

    @Test
    public void find_withUnknownSKUId_ShouldThrowNotFoundException() {
        try {
            localService.find(tester.getSecurityContext(), 9999L, null);
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.NOT_FOUND);
        }
    }


    @Test
    public void findDiscounts_shouldReturn404ExWhenSKUNotFound() {
        try {
            localService.findDiscounts(tester.getSecurityContext(), 9999L);
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.NOT_FOUND);
        }
    }

    @Test
    public void findDiscounts_shouldNotReturnExpiredNorDisabledDiscounts() {
        List<Discount> discounts = localService.findDiscounts(tester.getSecurityContext(), tester.getFixtures().aSKUWithDiscounts().getId());
        assertThat(discounts).isNotEmpty();
        assertThatDiscountsOf(discounts).areVisibleDiscountsOfASKUWithDiscounts();
    }

    @Test
    public void findAll_shouldReturnNoneEmptyList() {
        assertThat(localService.findAll(null, null, null, null, null, null)).isNotEmpty();
    }

    @Test
    public void findAll_withPagination_shouldReturnNoneEmptyListPaginated() {
        List<SKU> categories = localService.findAll(null, 0, 1, null, null, null);
        assertThat(categories).isNotEmpty();
        assertThat(categories).hasSize(1);
    }

    @Test
    public void findAll_withIdSearchParam_shouldReturnResultsWithMatchingId() {
        assertThat(localService.findAll(tester.getFixtures().aSKUNotAvailable().getId().toString(), null, null, null, null, null)).containsExactly(tester.getFixtures().aSKUNotAvailable());
    }

    @Test
    public void findAll_withNameSearchParam_shouldReturnResultsWithMatchingName() {
        assertThat(localService.findAll(tester.getFixtures().aSKUNotAvailable().getName(), null, null, null, null, null)).containsExactly(tester.getFixtures().aSKUNotAvailable());
    }

    @Test
    public void modifyUnknownSKU_ShouldThrowNotFoundException() {

        SKU detachedProductToModify = new SKU(9999L, null, null, null, null, null, null, null, null, null);
        try {
            localService.modify(tester.getSecurityContext(), detachedProductToModify);
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.NOT_FOUND);
        }
    }

    @Test
    public void modify_ShouldThrowForbiddenException_for_store_admin() {

        tester.setSAnotherStoreAdminUser();
        SKU sku = new SKU(tester.getFixtures().aVisibleSKU().getId(), "New name");
        try {
            tester.test_modify(sku);
            ;
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.FORBIDDEN);
        }
    }

    @Test
    public void modify_ShouldModify_for_store_admin() {

        tester.setStoreAdminUser();
        SKU sku = new SKU(tester.getFixtures().aVisibleSKU().getId(), "New name");
        tester.test_modify(sku);

        Assertions.assertThat(sku.getName()).isEqualTo("New name");
    }

    @Test
    public void countAll() {
        assertThat(localService.count(null)).isGreaterThan(0);
    }

    @Test
    public void countAll_withUnknownSearchCriteria() {
        assertThat(localService.count("666")).isEqualTo(0);
    }

    @Test
    public void create_shouldPersistAndAttachOwner_for_admin() {

        tester.setAdminUser();

        SKU sku = new SKU("name", "description", 1.0, 2, "reference",
                new Date(), new Date(), false, 1, "test@test.com");

        SKU createdSKU = tester.test_create(sku);
        assertThat(createdSKU).isNotNull();
        assertThat(createdSKU.getOwner()).isEqualTo("test@test.com");
    }

    @Test
    public void create_shouldPersistAndAttachOwner_for_store_admin() {

        tester.setStoreAdminUser();

        SKU sku = new SKU("name", "description", 1.0, 2, "reference",
                new Date(), new Date(), false, 1, null);

        SKU createdSKU = tester.test_create(sku);
        assertThat(createdSKU).isNotNull();
        assertThat(createdSKU.getOwner()).isEqualTo(TestCatalog.OWNER);
    }

    @Test
    public void create_shouldThrow_BadRequest_for_Admin() {

        try {
            tester.setAdminUser();
            SKU sku = new SKU("Test", "");
            tester.test_create(sku);
            fail("should have throw an exception");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.BAD_REQUEST);
        }
    }

    @Test
    public void delete_shouldRemove_for_admin() {

        tester.setAdminUser();
        SKU sku = new SKU("Test", "");
        sku.setOwner("an@owner.fr");
        tester.test_delete(sku);
        assertThat(tester.getEntityManager().find(SKU.class, sku.getId())).isNull();
    }

    @Test
    public void delete_shouldRemove_for_store_Admin() {

        tester.setStoreAdminUser();
        SKU sku = new SKU("Test", "");
        sku.setOwner(TestCatalog.OWNER);
        tester.test_delete(sku);
        assertThat(tester.getEntityManager().find(SKU.class, sku.getId())).isNull();
    }


    @Test
    public void delete_shouldThrow_Forbidden_for_store_Admin() {

        try {
            tester.setStoreAdminUser();
            SKU sku = new SKU("Test", "");
            sku.setOwner("test@test.org");
            tester.test_delete(sku);
            fail("should have throw an exception");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.FORBIDDEN);
        }
    }

    @Test
    public void delete_NotExistingEntry_shouldThrowNotFoundEx() {

        try {
            tester.getEntityManager().getTransaction().begin();
            localService.delete(tester.getSecurityContext(), 666L);
            tester.getEntityManager().getTransaction().commit();
            fail("should have thrown ex");
        } catch (WebApplicationException e) {
            assertThat(e.getResponse().getStatusInfo()).isEqualTo(Response.Status.NOT_FOUND);
        }
    }
}